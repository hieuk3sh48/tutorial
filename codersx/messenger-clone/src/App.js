import React, { useState, useEffect } from "react";
import './App.css';
import Message from './Message';
import db from "./firebase";
import firebase from 'firebase';
import {FormControl,Input} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';
import FlipMove from 'react-flip-move';

function App() {
  const [input, setInput] = useState('');
  const [messenges, setMessenges] = useState([]) 
  const [username, setUsername] = useState('')


  useEffect(() => {

    //onSnapchot: Get all
    //orderBy:timestamp
    db.collection('messages')
    .orderBy('timestamp','desc')
    .onSnapshot(snapshot=>{
      setMessenges(snapshot.docs.map(doc=>({id:doc.id, data:doc.data()})))
    }) 
  }, [])
  useEffect(() => {
    
    setUsername(prompt('Please enter your name...') || 'You');
  }, [])


  const setMessenger =(event)=>{
    event.preventDefault();

    //Add data
    db.collection('messages').add({
      text:input,
      username:username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    //setMessenges([...messenges,{username:username,text:input}]);
    setInput('');
  }

  return (
    <div className="App">

      <img alt='logo' src='https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100'/>
      <h1>Hello Clever Programmers !</h1>
      <h2>Welcome {username}</h2>

      <form className='app__form'>
        <FormControl className='app_formControl'>

          <Input className='app__input' placeholder='Enter a messenger...' value={input} onChange={event=>setInput(event.target.value)} id="my-input"/>         
          <IconButton className='app__iconButton' disabled={!input} variant="contained" color="primary" type='submit' onClick={setMessenger}>
            <SendIcon/>
          </IconButton>

        </FormControl>
      </form>

      <FlipMove>
        {
          messenges.map(message=>(
            <Message 
              username={username} 
              message={message.data} 
              key={message.id}
            />
          ))
        }
      </FlipMove>
      
    </div>
  );
}

export default App;
