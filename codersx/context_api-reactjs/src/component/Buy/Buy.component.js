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

import {CartContext} from './../../context_api/Cart';
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
                <div className='Buy'>
                    <Header/>

                    {
                        product.map((product,index)=>(
                            <Card style={{ width: '18rem' }} key={index}>
                                <Card.Img variant="top" src={product.avatar} />
                                <Card.Body>
                                    <Card.Title>{product.name}</Card.Title>
                                    <Card.Text>{product.information}</Card.Text>
                                    <CartContext.Consumer>
                                        {({setCart})=>(
                                            <Button onClick={()=>setCart(product)} variant="primary">Buy</Button>
                                        )}
                                    </CartContext.Consumer>
                                </Card.Body>
                            </Card>
                        ))
                    }
                </div>
            </Style>
        )
    }
}

export default Buy;