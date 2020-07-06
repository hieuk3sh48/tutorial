import React,{Component} from 'react';
import axios from 'axios';
import {
    Table,
    Form,
    Button,
} from 'react-bootstrap';
import {
    NavLink,
    Redirect,

} from "react-router-dom";
import Header from './../../layout/Header/Header.component';
import Style from './style.js';

class Product extends Component{
    constructor(props){
        super(props);
        this.state={
            product:[],
            id:'',
            form:false,
            edit:false,
            add:false,
            avatar:'',
            name:'',
            status:true,
            count:0,
            information:'',
        }
    }

    componentDidMount(){
        this.getAll();
    }
    componentDidUpdate(){
        this.getAll();
    }
    getAll(){
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
    onClickEdit(product){
        return(event)=>{
            this.setState({
                id:product._id,
               
                form:true,
                edit:true,
                add:false,
            })
        }

    }
    onClickDelete(product){
        return(event)=>{
            
            axios.delete('http://localhost:5000/product/delete/'+product._id)
            .then(res=>console.log(res.data))
            .catch(err=>console.log(err))
        }
    }
    onClickCheckbox(e){
        this.setState({
            status:e.target.checked
        })
    }
    onChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    onSubmitForm(e){
        e.preventDefault();

        const {avatar,name,count,status,information,edit,add}=this.state;
        const newProduct={
            avatar:avatar,
            name:name,
            count:count,
            status:status,
            information:information,
        } 

        if(edit){
            const {id}=this.state;
            axios.patch('http://localhost:5000/product/update/'+id,newProduct)
            .then(()=>{
                this.setState({
                    form:false
                })
            })
            .catch(err=>console.log(err));
        }
        if(add){
            axios.post('http://localhost:5000/product/add/',newProduct)
            .then(()=>{
                this.setState({
                    form:false
                })
            })
            .catch(err=>console.log(err))
        }

    }
    onClickAdd(e){
        this.setState({
            form:true,
            add:true,
            edit:false,
        })
    }
    onClickCancel(e){
        this.setState({
            form:false
        })
    }
    render(){
        const {product,form,avatar,name,count,status,information,edit}=this.state;
        return(
            <Style>
                <div className='Product'>
                    <Header/>

                    <Form style={{display:form?'block':'none'}} onSubmit={this.onSubmitForm.bind(this)} enctype="multipart/form-data">
                        <Form.Group controlId="formBasicAvatar">
                            <Form.Label>Avatar</Form.Label>
                            <Form.Control name='avatar' value={avatar} onChange={this.onChange.bind(this)} type="file" label="Avatar to you" />
                        </Form.Group>
                        <Form.Group controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control name='name' value={name} onChange={this.onChange.bind(this)} type="text" placeholder="Enter Name" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCount">
                            <Form.Label>Count</Form.Label>
                            <Form.Control name='count' value={count} onChange={this.onChange.bind(this)} type="number" placeholder="Enter Count" min='1'/>
                        </Form.Group>
                        <Form.Group controlId="formBasicInformation">
                            <Form.Label>Information</Form.Label>
                            <Form.Control name='information' value={information} onChange={this.onChange.bind(this)} type="text" placeholder="Enter information" />
                        </Form.Group>
                        <Form.Group controlId="formBasicStatus">
                            <Form.Check onClick={this.onClickCheckbox.bind(this)} type="checkbox" label="Status" checked={status?'true':''}/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            {edit?'Edit':'Add'}
                        </Button>
                        <Button onClick={this.onClickCancel.bind(this)} variant="danger" type="cancel">
                            Cancel
                        </Button>
                    </Form>

                    <Button onClick={this.onClickAdd.bind(this)} variant="info">Add</Button>
                    <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Avatar</th>
                        <th>Name</th>
                        <th>Information</th>
                        <th>Status</th>
                        <th>count</th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            product.map((product,index)=>(
                                <tr key={index}>
                                <td>{index+1}</td>
                                <td>
                                    <img src={product.avatar} alt='avatar'/>
                                </td>
                                <td>{product.name}</td>
                                <td>{product.information}</td>
                                <td>{product.status?'con hang':'het hang'}</td>
                                <td>{product.count}</td> 
                                <td>
                                    <Button onClick={this.onClickEdit(product)} variant="info">Edit</Button>
                                    <Button onClick={this.onClickDelete(product)} variant="danger">Delete</Button>
                                </td>                      
                                </tr>   
                            ))
                        }                 
                    </tbody>
                    </Table>
                </div>
            </Style>
        )
    }
}

export default Product;