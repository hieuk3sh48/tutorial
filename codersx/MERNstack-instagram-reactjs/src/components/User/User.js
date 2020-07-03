import React,{Component} from 'react';
import axios from 'axios';
import {
    Button,
    Form,
    Navbar,
    Nav,
} from 'react-bootstrap';
import {
    Link,
    Redirect,
    
} from "react-router-dom";
import Footer from './../../layouts/Footer/Footer.js';
import Style from './style.js';
import defaultAvatar from './../../assets/img/default-avatar.jpg';
import model3 from './../../assets/img/model3.jpeg';
import grid from './../../assets/icons/grid.svg';
import user from './../../assets/icons/user.svg';

class User extends Component {
    constructor(props){
        super(props);
        this.state={
            avatar:defaultAvatar,
            name:'name',
            email:'@email.com'
        }
    }
    componentDidMount(){

        axios.get('http://localhost:5000/user/'+localStorage.getItem('userId'))
        .then(res=>{

            this.setState({
                avatar:res.data.avatar,
                name:res.data.name,
                email:res.data.email
            })
        })
        .catch(err=>console.log(err));
    }
    SignOut(){
        localStorage.removeItem('userId');
    }
    render(){
        const {avatar,name,email}=this.state;
        if(localStorage.getItem('userId')===null){
            return <Redirect to='/signin'/>
        };  
        return (
            <Style>
                <div className="User flex-column">

                    {/* Header */}
                    <Navbar bg="light" expand="lg">
                        <Navbar.Brand>{email}
                            <i className="fas fa-angle-down"></i>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />   
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link as={Link} onClick={this.SignOut.bind(this)}>SignOut</Nav.Link>
                            </Nav>     
                        </Navbar.Collapse>        
                    </Navbar>

                    {/* Body */}
                    <div className='body'>
                        
                        {/* Title */}
                        <div className='title flex-row'>
                            <div className='border-img'>
                                <img className='avatar' src={avatar} alt='avatar'/>
                            </div>
                            <div className='content flex-row'>
                                <span className='posts'>
                                    <p className='number'>0</p>
                                    <p className='text'>Posts</p>
                                </span>
                                <span className='followers'>
                                    <p className='number'>19</p>
                                    <p className='text'>Followers</p>
                                </span>
                                <span className='following'>
                                    <p className='number'>38</p>
                                    <p className='text'>Following</p>
                                </span>
                            </div>
                            <p className='name'>{name}</p>
                        </div>

                        {/* Profile */}
                        <div className='profile'>
                            <Button className='btn-edit' variant="light">Edit Profile</Button>
                            <div className='content-profile'>
                                <div className='menu flex-row'>
                                    <div className='border-icon'>
                                        <img className='icon' src={grid} alt='grid'/>
                                    </div>
                                    <div className='border-icon'>
                                        <img className='icon' src={user} alt='user'/>
                                    </div>
                                </div>
                                <div className='photo-video flex-row'>
                                    <img className='img-post' src={model3} alt='model3'/>
                                    <img className='img-post' src={model3} alt='model3'/>
                                    <img className='img-post' src={model3} alt='model3'/>
                                    <img className='img-post' src={model3} alt='model3'/>
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <Footer/>
                    </div>
                </div>
            </Style>
        );
    }
}

export default User;
