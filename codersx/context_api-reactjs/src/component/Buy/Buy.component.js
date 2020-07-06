import React,{Component} from 'react';
import axios from 'axios';
import {
    Button,
    Card,
} from 'react-bootstrap';
import {
    Link,
    Redirect,

} from "react-router-dom";

import NumberProvider from './../../context_api/NumberProvider';
import Style from './style.js';
import Header from './../../layout/Header/Header.component';

class Buy extends Component{
    constructor(props){
        super(props);
        this.state={
            product:[]
        }
    }
    componentDidMount(){

        axios.get('http://localhost:5000/product/')
        .then(res=>{
            if(res.data.length>0){
                this.setState({
                    product:res.data

                })
            }
        })
        .catch(err=>console.log(err));
    }
    render(){
        const {product} =this.state;
        return(
            <Style>
                <NumberProvider>
                <div className='Buy'>
                    <Header/>

                    {
                        product.map((product,index)=>(
                            <Card style={{ width: '18rem' }} key={index}>
                                <Card.Img variant="top" src={product.avatar} />
                                <Card.Body>
                                    <Card.Title>{product.name}</Card.Title>
                                    <Card.Text>{product.information}</Card.Text>
                                    <Button variant="primary">Buy</Button>
                                </Card.Body>
                            </Card>
                        ))
                    }
                </div>
                </NumberProvider>
            </Style>
        )
    }
}

export default Buy;