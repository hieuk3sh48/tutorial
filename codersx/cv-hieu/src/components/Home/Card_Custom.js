import React from 'react';
import { Container, Card } from 'react-bootstrap';
import avatar from '../../assets/img/C_Vdocx.10115.jpg'

function Card_Custom() {
    return (
        <Container className='card_Custom'>
          <div className='left'>
            <div className='avatar'>
              <img src={avatar} alt='avatar'/>
            </div>
            <p className='vitri'>Fresher Frontend Dev</p>
            <Card className='information'>
              <Card.Body>
                <Card.Title>Name:</Card.Title>
                <Card.Text>Phạm Văn Hiếu</Card.Text>
              </Card.Body>
              <Card.Body>
                <Card.Title>Email:</Card.Title>
                <Card.Text>pvhieu7795@gmail.com</Card.Text>
              </Card.Body>
              <Card.Body>
                <Card.Title>Phone:</Card.Title>
                <Card.Text>0347327655</Card.Text>
              </Card.Body>
              <Card.Body>
                <Card.Title>Address:</Card.Title>
                <Card.Text>Thai Thuy, Thai Binh</Card.Text>
              </Card.Body>
              <Card.Body>
                <Card.Title>Date of birth:</Card.Title>
                <Card.Text>07/07/1995</Card.Text>
              </Card.Body>
              <Card.Body>
                <Card.Title>Gender:</Card.Title>
                <Card.Text>Male</Card.Text>
              </Card.Body>
              <Card.Body>
                <Card.Title>Education:</Card.Title>
                <Card.Text>SaoDo university</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className='right'>
            <div className='item'>
              <div className='title'>
                <h1>React</h1>
              </div>
              <div className='content'>
                <p>-- JSX, Component, State, Props</p>
                <p>-- props.children, propTypes</p>
                <p>-- Component Lifecycles</p>
                <p>-- React router</p>
                <p>-- Storybook</p>
                <p>-- Context API</p>
                <p>-- React hooks</p>
                <p>-- Redux</p>
              </div>
            </div>
            <div className='item'>
              <div className='title'>
                <h1>NodeJS Web Server using Express</h1>
              </div>
              <div className='content'>
                <p>-- Template Engine-PUGJS</p>
                <p>-- Query parameters</p>
                <p>-- Nodemon</p>
                <p>-- Route paramaters</p>
                <p>-- Express Router</p>
                <p>-- Server-side validation</p>
                <p>-- Middleware</p>
                <p>-- Cookie-Session</p>
                <p>-- brcypt, Environment Variables</p>
                <p>-- REST API: GET, POST, PUT, PATCH, DELETE</p>
              </div>
            </div>
            <div className='item'>
              <div className='title'>
                <h1>Kiến thức cơ bản khác</h1>
              </div>
              <div className='content'>
                <p>-- MongoDB, MONGODB ATLAS</p>
                <p>-- HTML, CSS, JAVASCRIPT</p>
                <p>-- SCSS</p>
                <p>-- FIREBASE</p>
                <p>-- MATERIAL-UI</p>
                <a href='https://github.com/hieuk3sh48/tutorial'>-- Github</a>
                <a href='https://glitch.com/@hieuk3sh48'>-- Glitch</a>
                
              </div>
            </div>
          </div>
      </Container>     
    )
}

export default Card_Custom
