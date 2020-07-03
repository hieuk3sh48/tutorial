import React, {Component} from 'react';
import axios from 'axios';
import {
    Button,
    Form,
} from 'react-bootstrap';
import {
    Link,
    Redirect,
} from "react-router-dom";
import model1 from './../../assets/img/model1.jpg';
import Style from './style.js';

class SignUp extends Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            name:'',
            password:'',
            avatar:'',
            isValidate:false,
        }
    }
    componentDidMount(){
        this.setState({
            avatar:model1
        })
    }
    onSubmit(e){
        e.preventDefault(); //chan Loading

        const {email,name,password,avatar}=this.state;
        const Newuser ={
            email:email,
            name:name,
            avatar:avatar,
            password:password
        }  

        console.log(Newuser);
        /* axios */
        axios.post('http://localhost:5000/user/add/',Newuser)
            .then(res=>{
                console.log('Account successfully created');
                console.log(res.data);

                this.setState({
                    isValidate:true
                })
            })
            .catch(err=>console.log(err));
    }
    onChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render(){
        const {email,name,password,avatar,isValidate}=this.state;
        if(isValidate){
            return <Redirect to='/signin'/>
        }
    return (
    <Style>
        <div className="SignUp flex-column">
            
            {/* Title */}
            <div className='title'>
                <h1>Instagram</h1>
                <h3>Sign up to see photos and videos from your friend. </h3>
            </div>

            {/* From SignUp */}
            <Form onSubmit={this.onSubmit.bind(this)}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control name='email' value={email} onChange={this.onChange.bind(this)}  type="email" placeholder="emailaddress" />
                </Form.Group>
                <Form.Group controlId="formBasicName">
                    <Form.Control name='name' value={name} onChange={this.onChange.bind(this)} type="text" placeholder="name" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Control name='password' value={password} onChange={this.onChange.bind(this)} type="password" placeholder="password" />
                </Form.Group>     
                <Button variant="primary" type="submit">
                    SIGN UP
                </Button>
            </Form>

            {/* Sign In */}
            <div className='sign-in'>
                <p>Have an account? </p>
                <Link to='/signin'> Sign in</Link>
            </div>
        </div>
    </Style>
  );
    }
}

export default SignUp;
