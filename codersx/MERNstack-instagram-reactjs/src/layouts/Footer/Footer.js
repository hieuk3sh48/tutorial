import React, {Component} from 'react';
import axios from 'axios';
import Style from './style.js';
import house from './../../assets/icons/house.svg';
import search from './../../assets/icons/search.svg';
import add from './../../assets/icons/add.svg';
import love from './../../assets/icons/love.svg';
import defaultAvatar from './../../assets/img/default-avatar.jpg';
import {
  NavLink,
  Redirect,
  
} from "react-router-dom";

class Footer extends Component {
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
    return (
        <Style>
          <div className='Footer flex-row'>
              <NavLink to='/timeline'>
                <img className='icon' src={house} alt='house'/>
              </NavLink>
              <img className='icon' src={search} alt='search'/>
              <img className='icon' src={add} alt='add'/>
              <img className='icon' src={love} alt='love'/>
              <NavLink to='/user'>
                <img className='avatar' src={avatar} alt='avatar'/>
              </NavLink>
          </div>
        </Style>
    );
  }
}

export default Footer;
