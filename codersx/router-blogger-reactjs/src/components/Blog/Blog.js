import React from 'react';
import Styles from './style.js';
import post1 from './../../assets/Blog-post/post-1.jpg';
import post2 from './../../assets/Blog-post/post-2.jpg';
import post3 from './../../assets/Blog-post/post-3.jpg';
import post4 from './../../assets/Blog-post/post-4.png';
import post5 from './../../assets/Blog-post/post-5.png';
import post6 from './../../assets/Blog-post/post-6.png';
import { 
  Card,
  Button,
} from 'react-bootstrap';

function Blog() {
  const post = [post1,post2,post3,post4,post5,post6];
  return (
    <Styles>
        <section className="Blog">
            <div className='container'>
              <div className='owl-carousel owl-theme blog-post'>   
                {
                  post.map((post,index)=>(
                    <Card data-aos="fade-down" style={{ width: '18rem' }} key={index}>
                      <Card.Img variant="top" src={post} />
                      <Card.Body>
                        <Card.Title>London Fashion week's continued the evolution</Card.Title>
                        <Button variant="primary">Fashion</Button>
                        <Card.Text>
                          2 minutes
                        </Card.Text>                
                      </Card.Body>
                    </Card>
                  ))
                }         
              </div>
            </div>
        </section>
    </Styles>
  );
}

export default Blog;
