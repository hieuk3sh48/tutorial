import React, { useState, useEffect } from 'react';
import { Modal, makeStyles, Input, Button } from '@material-ui/core';
import InstagramEmbed from 'react-instagram-embed';

import './App.css';
import Post from './Post';
import {db,auth} from './firebase';
import ImageUpload from './ImageUpload';

function getModalStyle(){
  const top = 50 ;
  const left = 50 ;

  return{
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  }
}

const useStyles = makeStyles(theme=>({
  paper:{
    position:'absolute',
    width:400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2,4,3)
  }
}))

function App() {
  const [posts, setPosts]=useState([]);
  const [openSignUp, setOpenSignUp] = useState(false);
  const [openSignIn, setOpenSignIn] = useState(false);
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null);

  const [modalStyle] = useState(getModalStyle)

  const classes = useStyles();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(authUser=>{
      if(authUser){
        //user has logged in...
        setUser(authUser);
      }else{
        // user has logged out...
        setUser(null)
      }
    })

    return ()=>{
      unsubscribe();
    }
  },[user,username])
  useEffect(() => {

    db.collection('posts')
    .orderBy('timestamp','desc')
    .onSnapshot(snapshot=>{

      setPosts(snapshot.docs.map(doc=>({id:doc.id, data:doc.data()})))
    })
  }, [user,username])

  const signUp=(event)=>{
    event.preventDefault();
    //Xac thuc user
    auth
    .createUserWithEmailAndPassword(email,password)
    .then(authUser=>{

      return authUser.user.updateProfile({
        displayName: username
      })
    })
    .catch(err=>alert(err.message))

    setOpenSignUp(false);
  }
  
  const signIn=(event)=>{
    event.preventDefault();

    auth
    .signInWithEmailAndPassword(email,password)
    .catch(err=>alert(err.message))

    setOpenSignIn(false);
  }

  return (
    <div className="App">


      <Modal
        open={openSignUp}
        onClose={()=> setOpenSignUp(false)}  
      >
        <div style={modalStyle} className={classes.paper}>
          <form className='app__signup'>
            <center>
              <img 
                className='app__headerImage'
                alt='logo'
                src='https://ichef.bbci.co.uk/childrens-responsive-ichef-live/r/320/1x/cbeebies/pets_topic_text_f.png'
              />
            </center>
              <Input
                type='text'
                placeholder='username'
                value={username}
                onChange={e=>setUsername(e.target.value)}
              />
              <Input
                type='email'
                placeholder='email'
                value={email}
                onChange={e=>setEmail(e.target.value)}
              />
              <Input
                type='password'
                placeholder='password'
                value={password}
                onChange={e=>setPassword(e.target.value)}
              />
              <Button type='submit' onClick={signUp}>Sign Up</Button>
          </form>
        </div>
      </Modal>
      <Modal
        open={openSignIn}
        onClose={()=> setOpenSignIn(false)}  
      >
        <div style={modalStyle} className={classes.paper}>
          <form className='app__signup'>
            <center>
              <img 
                className='app__headerImage'
                alt='logo'
                src='https://ichef.bbci.co.uk/childrens-responsive-ichef-live/r/320/1x/cbeebies/pets_topic_text_f.png'
              />
            </center>
              <Input
                type='email'
                placeholder='email'
                value={email}
                onChange={e=>setEmail(e.target.value)}
              />
              <Input
                type='password'
                placeholder='password'
                value={password}
                onChange={e=>setPassword(e.target.value)}
              />
              <Button type='submit' onClick={signIn}>Sign In</Button>
          </form>
        </div>
      </Modal>


      <div className='app__header'>
          <img 
            className='app__headerImage'
            alt='logo'
            src='https://ichef.bbci.co.uk/childrens-responsive-ichef-live/r/320/1x/cbeebies/pets_topic_text_f.png'
          />

          {
            user?(
              <Button onClick={()=>auth.signOut()}>Logout</Button>
            ):(
              <div className='app__loginContainer'>
                <Button onClick={()=>setOpenSignIn(true)}>Sign In</Button>
                <Button onClick={()=>setOpenSignUp(true)}>Sign Up</Button>
              </div>
            )
          }

      </div>
      
      <div className='app__posts'>
        <div className='left'>
          {
            user && posts.map(post=>(
              <Post key={post.id} username={user.displayName} id={post.id} post={post.data}/>
            ))
          }
        </div>
        <div className='right'>
          <InstagramEmbed
            url='https://www.instagram.com/p/CCWJjlJhdEy/'
            maxWidth={320}
            hideCaption={false}
            containerTagName='div'
            protocol=''
            injectScript
            onLoading={() => {}}
            onSuccess={() => {}}
            onAfterRender={() => {}}
            onFailure={() => {}}
          />
        </div>
      </div>
  
      {
        user?.displayName?(
          <ImageUpload username={user.displayName}/>
        ):(
          <h3>Sorry you need to login to upload</h3>
        )
      }
    </div>
  );
}

export default App;
