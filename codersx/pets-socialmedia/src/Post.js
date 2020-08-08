import React, { useState, useEffect } from 'react'
import firebase from 'firebase';
import './Post.css';
import { Avatar } from '@material-ui/core';
import { db } from './firebase';

function Post({post,id,username}){
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState('');

    useEffect(() => {
        let unsubscribe;
        if(id){
            unsubscribe = db.collection('posts').doc(id)
            .collection('comments')
            .orderBy('timestamp','desc')
            .onSnapshot(snapshot=>{
                setComments(snapshot.docs.map(doc=>doc.data()))
            })
        }
        return () => {
            unsubscribe()
        }
    }, [id])

    const postComment = (event)=>{
        event.preventDefault();

        db.collection('posts').doc(id).collection('comments')
        .add({
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
            username:username,
            text: comment
        })
        setComment('');
    }

    return(
        <div className='Post'>

        {/* header ==> avatar + username */}
        <div className='post__header'>
            <Avatar
                className='post__avatar'
                alt='avatar'
                src='.static/images/avatar/1.jpg'
            />
            <h3>{post.username}</h3>
        </div>

        {/* image */}
        <img 
            className='post__image'
            alt='post'
            src={post.imageUrl}
        />

        {/* username + caption */}
        <h4 className='post__text'><strong>{post.username}</strong> {post.caption}</h4>


        <div className='post__comments'>
            {
                comments.map(comment=>(
                    <p>
                        <strong>{comment.username}</strong> {comment.text}
                    </p>
                ))
            }
        </div>
        
        {
            username && (
                <form className='post__commentBox'>
                    <input
                        className='post__input'
                        type='text'
                        placeholder='Add comments...'
                        value={comment}
                        onChange={e=>setComment(e.target.value)}
                    />
                    <button
                        className='post__button'
                        disabled={!comment}
                        type='submit'
                        onClick={postComment}
                    >
                        Post
                    </button>
                </form>
            )
        }
        </div>
    )
}

export default Post;