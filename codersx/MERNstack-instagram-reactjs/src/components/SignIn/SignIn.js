import React, { Component } from 'react';
import axios from 'axios';
import {
    Button,
    Form,
} from 'react-bootstrap';
import {
    Link,
    Redirect,

} from "react-router-dom";
import Style from './style.js';

class SignIn extends Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:'',
            isValidate:false
        }
    }
   /*  componentDidMount(){
        this.setState({
            email:'pvhieu7795@gmail.com',
            password:'1'
        })
    } */
    onSubmit(e){
        e.preventDefault(); //chan Loading

        const user={
            email:this.state.email,
            password:this.state.password
        };

        axios.post('http://localhost:5000/user/signin/',user)
        .then(res=>{
            console.log(res.data);

            localStorage.setItem('userId',res.data._id);
            this.setState({
                isValidate:true
            })
        })
        .catch(err=>console.log(err));
        
        //console.log(localStorage.getItem('userId'))
    }
    onChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    render(){
        const {email,password,isValidate}=this.state;
        if(isValidate){
            return <Redirect to='/timeline'/>
        }
        return (
            <Style>
                <div className="SignIn flex-column">
                    {/* Header */}
                    <div className='header'>
                        <Button variant="light">English
                            <i className="fas fa-angle-down"></i>
                        </Button> 
                    </div>                  

                    {/* Title */}
                    <div className='title'>
                        <h1>Instagram</h1>
                    </div>
                    
                    {/* Form SignIn  */}
                    <Form onSubmit={this.onSubmit.bind(this)}>
                        <Form.Label>Sign in and use more features</Form.Label>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control value={email} name='email' onChange={this.onChange.bind(this)} type="email" placeholder="Email or username" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Control value={password} name='password' onChange={this.onChange.bind(this)} type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Sign in
                        </Button>
                        <Form.Text className="text-muted">
                            Forgot your login details?
                            <Link to='/help'>Get help signing in</Link>
                        </Form.Text>
                    </Form>

                    {/* Or */}
                    <div className='line-or'>
                        <hr/>
                        <div>Or</div>
                    </div>

                    {/* SignIn with */}
                    <div className='signIn-with'>
                        <div className='signIn-item'>
                            <i className="fab fa-facebook-square"></i>
                            <span> Continue with Faceboook</span>
                        </div>
                    </div>

                    {/* Sign up */}
                    <div className='sign-up'>
                        <p>Don't have an account? </p>
                        <Link to='/signup'> Sign up</Link>
                    </div>
                </div>
            </Style>
        );
    }
}

export default SignIn;
