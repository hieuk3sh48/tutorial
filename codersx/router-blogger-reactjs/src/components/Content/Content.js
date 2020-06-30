import React, { Component } from 'react'
import Styles from './style.js';
import { 
  Form,
} from 'react-bootstrap';
import blog1 from './../../assets/Blog-post/blog1.png';
import blog2 from './../../assets/Blog-post/blog2.png';
import blog3 from './../../assets/Blog-post/blog3.png';
import blog4 from './../../assets/Blog-post/blog4.png';
import mblog1 from './../../assets/popular-post/m-blog-1.jpg';
import mblog2 from './../../assets/popular-post/m-blog-2.jpg';
import mblog3 from './../../assets/popular-post/m-blog-3.jpg';
import mblog4 from './../../assets/popular-post/m-blog-4.jpg';

import { Link,NavLink } from 'react-router-dom';
import  Page from './../../layouts/Page.js';

export class Content extends Component {

  state={
      blog : [blog1,blog2,blog3,blog4],
      mblog: [mblog1,mblog2,mblog3,mblog4],
      tags:['Software','technology','travel','illustration','design','lifestyle','love','project'],
      items:[
        {title:'Software',count:'05'},
        {title:'Techonlogy',count:'02'},
        {title:'Lifestyle',count:'07'},
        {title:'Shopping',count:'01'},
        {title:'Food',count:'08'},
      ],
      currentPage : 1,
      postsPerPage : 2,
  }
  
  render(){
    const {currentPage,postsPerPage,blog,mblog,items,tags}=this.state;

    const indexOfLastPost = currentPage*postsPerPage;
    const indexOfFirstPost = indexOfLastPost-postsPerPage;
    const currentBlog = blog.slice(indexOfFirstPost,indexOfLastPost);

    const item = number=>this.setState({currentPage:number});
    const next = ()=>this.setState({currentPage:currentPage+1});
    const prev = ()=>this.setState({currentPage:currentPage-1});

    return (
      <Styles>
          <section className="Content container">
            <div className='posts'>
              {
                currentBlog.map((blog,index)=>(
                  <div className='post-content' key={index}>
                    <div className='post-image'>
                      <div className='img' data-aos="flip-left">
                        <img src={blog} alt='blog1'></img>
                      </div>
                      <div className='post-info flex-row'>
                        <span><i className='fas fa-user text-gray'></i>&nbsp;&nbsp;Admin</span>
                        <span><i className='fas fa-calendar-alt text-gray'></i>&nbsp;&nbsp;January 14,2020</span>
                        <span>2 Commets</span>
                      </div>
                    </div>
                    <div className='post-title'>
                      <Link to='/'>
                        Why should boys have all the fun? it's the women who are making india an alcohol-loving contry
                      </Link>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptas deserunt beatae adipisci iusto totam placeat corrupti ipsum, tempora magnam incidunt aperiam tenetur a nobis, voluptate, numquam architecto fugit. Eligendi quidem ipsam ducimus minus magni illum similique veniam tempore unde?
                      </p>
                      <button className='btn post-btn'>
                        Read More &nbsp;
                        <i className='fas fa-arrow-right'></i>
                      </button>
                    </div>
                    <hr></hr>
                  </div>
                ))
              }
              <Page item={item}
                    prev={prev}
                    next={next}

                    postsPerPage={postsPerPage}
                    totalPosts={blog.length}
              />
            </div>
            <aside className='sidebar'>
              <div className='category'>
                <h2>Category</h2>
                <ul className='category-list'>
                  {
                      items.map((item,index)=>(
                        <li className='list-items' key={index} data-aos="fade-up">
                          <NavLink to='/'>{item.title}</NavLink>
                          <span>({item.count})</span>
                        </li>
                      ))
                  }  
                </ul>
              </div>
              <div className='popular-post'>
                <h2>Popular Post</h2>
                {
                  mblog.map((mblog,index)=>(
                    <div className='post-content' key={index} data-aos="flip-up">
                      <div className='post-image'>
                        <div className='img'>
                          <img src={mblog} alt='mblog1'></img>
                        </div>
                        <div className='post-info flex-row'>
                          <span><i className='fas fa-calendar-alt text-gray'></i>&nbsp;&nbsp;January 14,2020</span>
                          <span>2 Commets</span>
                        </div>
                      </div>
                      <div className='post-title'>
                        <Link to='/'>
                          New data recording system to better analyse road accidents
                        </Link>   
                      </div>
                    </div>
                  ))
                }
              </div>
              <div className='newsletter'>
                <h2>Newsletter</h2>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Control type="email" placeholder="Email" />
                  <button className='btn' data-aos="flip-right">Subscribe</button>
                </Form.Group>
              </div>
              <div className='popular-tags'>
                <h2>Popular Tags</h2>
                <div className='tags flex-row'>
                  {
                    tags.map((tag,index)=>(
                      <span key={index} className='tag btn' data-aos="fade-up-left">{tag}</span>  
                    ))
                  }
                </div>
              </div>
            </aside>
          </section>
      </Styles>
    );
  }
}
export default Content
