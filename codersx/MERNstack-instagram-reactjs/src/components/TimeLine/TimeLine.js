import React,{Component}from 'react';
import axios from 'axios';
import {
    Button,
    Form,
} from 'react-bootstrap';
import {
    Link,
    Redirect,
    NavLink
} from "react-router-dom";
import Style from './style.js';
import Footer from './../../layouts/Footer/Footer.js';
import camera from './../../assets/icons/camera.svg';
import defaultAvatar from './../../assets/img/default-avatar.jpg';
import model3 from './../../assets/img/model3.jpeg';

class TimeLine extends Component{
    constructor(props){
        super(props);
        this.state={
            avatar:defaultAvatar
        }
    }
    componentDidMount(){

        axios.get('http://localhost:5000/user/'+localStorage.getItem('userId'))
        .then(res=>{

            this.setState({
            avatar:res.data.avatar
            })
        })
        .catch(err=>console.log(err));
    }
    render(){
        const {avatar}=this.state;
        if(localStorage.getItem('userId')===null){
            return <Redirect to='/signin'/>
        };
        return (
            <Style>
                <div className="TimeLine flex-column">

                {/* Header */}
                <div className='header flex-row'>
                        <img className='icon' src={camera} alt='camera'></img>
                        <Link to='/timeline'><h1>Instagram</h1></Link>
                        <i className="far fa-paper-plane"></i>
                </div>

                {/* Body */}
                <div className='body'>
                        <div className='posts'>
                            
                            {/* Title */}
                            <div className='title-post flex-row'>
                                <div className='border-avatar'>
                                    <img className='avatar' src={model3} alt='model3'/>
                                </div>
                                <div className='user'>
                                    <h2>NASA</h2>
                                    <p>The Freakin' Moon!</p>
                                </div>
                                <i className="fas fa-ellipsis-h"></i>
                            </div>

                            {/* Img Post */}
                            <div className='img-post'/>

                            {/* Icons */}
                            <div className='icon-post flex-row'>
                                <div className='left'>
                                    <i className="far fa-heart"></i>
                                    <i className="far fa-comment"></i>
                                    <i className="far fa-paper-plane"></i>
                                </div>
                                <div className='right'>
                                    <i className="far fa-bookmark"></i>
                                </div>
                            </div>

                            {/* Liked */}
                            <p className='liked'>
                                Liked by spacecase and 1969 others
                            </p>

                            {/* content */}
                            <p className='content'>
                                <span>Name</span>
                                <span>We made it! </span>
                            </p>

                            {/* comments */}
                            <div className='comments'>
                                <p>View all 999 comments</p>
                                <Form className='flex-row'>
                                    <img src={avatar} alt='avatar' className='avatar'/>
                                    <Form.Group className='addcomment' controlId="formBasicAddcomment">
                                        <Form.Control type="text" placeholder="Add a comment..." />
                                    </Form.Group>   
                                    <div className='icons'>
                                        <i className="fas fa-heart"></i>
                                        <i className="fas fa-smile-beam"></i>
                                        <i className="fas fa-plus-circle"></i>
                                    </div>       
                                </Form>
                            </div>
                        </div>
                        
                </div>
                
                {/* Footer */}
                <Footer/>
                </div>
            </Style>
        );

    }
}

export default TimeLine;
