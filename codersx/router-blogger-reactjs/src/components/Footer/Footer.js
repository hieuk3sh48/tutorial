import React from 'react';
import Styles from './style.js';
import { 
  Form,
} from 'react-bootstrap';
import{
  animateScroll as scroll,
}from "react-scroll";
import insta1 from './../../assets/instagram/thumb-card3.png';
import insta2 from './../../assets/instagram/thumb-card4.png';
import insta3 from './../../assets/instagram/thumb-card5.png';
import insta4 from './../../assets/instagram/thumb-card6.png';
import insta5 from './../../assets/instagram/thumb-card7.png';
import insta6 from './../../assets/instagram/thumb-card8.png';

function Footer() {
  const insta=[insta1,insta2,insta3,insta4,insta5,insta6];
  return (
    <Styles>
      <footer className="Footer" id='footer'>
          <div className='container'>
            <div className='about-us' data-aos="fade-up" data-aos-delay='100'>
              <h2>About us</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quia atque nemo ad modi officiis iure, autem nulla tenetur repellendus.</p>
            </div>
            <div className='newsletter' data-aos="fade-up" data-aos-delay='200'>
              <h2>Newsletter</h2>
              <p>Stay update with our latest</p>
              <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Control type="email" placeholder="Email" />
                  <button className='btn-form'>
                    <span><i className='fas fa-chevron-right'></i></span>
                  </button>
              </Form.Group>
            </div>
            <div className='instagram' data-aos="fade-up" data-aos-delay='300'>
              <h2>Instagram</h2>
              <div className='flex-row'>
                {
                    insta.map((insta,index)=>(
                      <img key={index} src={insta} alt=''></img>
                    ))
                }
              </div>
            </div>
            <div className='follow' data-aos="fade-up" data-aos-delay='400'>
              <h2>Follow us</h2>
              <p>Let us be Social</p>
              <div>
                <i className='fab fa-facebook-f'></i>
                <i className='fab fa-twitter'></i>
                <i className='fab fa-instagram'></i>
                <i className='fab fa-youtube'></i>
              </div>
            </div>
            <div className='ScrollToTop' onClick={()=>scroll.scrollToTop()}>
              <span><i className='fas fa-arrow-circle-up fa-2x'></i></span>
            </div>
          </div>
      </footer>
    </Styles>
  );
}

export default Footer;
