import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { storage, db } from './firebase';
import firebase from 'firebase';
import './ImageUpload.css';

function ImageUpload({username}){
    const [caption, setCaption] = useState('');
    const [progress, setProgress] = useState(0);
    const [image, setImage] = useState(null)

    const handleChangeImage = (event)=>{

        if(event.target.files[0]){
            setImage(event.target.files[0])
        }
    }

    const handleUpload = (event)=>{
        if(image){
            const uploadTask = storage.ref(`images/${image.name}`).put(image)
            
            uploadTask.on(
                'state_changed',
                (snapshot)=>{

                    //progress function...
                    const progress = Math.round(
                        (snapshot.bytesTransferred/snapshot.totalBytes) * 100
                    );
                    setProgress(progress)
                },
                (err)=>{alert(err.message)},
                ()=>{
                    //complete function...
                    storage
                    .ref('images')
                    .child(image.name)
                    .getDownloadURL()
                    .then(url=>{

                        //post image inside db
                        db.collection('posts').add({
                            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
                            caption:caption,
                            imageUrl: url,
                            username:username
                        })

                        setProgress(0);
                        setCaption('');
                        setImage('');

                    })

                }
            )
        }else{
            alert('Sorry,image not selected...')
        }
    }

    return(
        <div className='ImageUpload'>

            <div>
                <progress className='imageUpload__progress' value={progress} max='100'/>
                <input
                    type='text'
                    placeholder='Enter a caption...'
                    onChange={e=>setCaption(e.target.value)}
                    value={caption}
                />
                <input
                    type='file'
                    onChange={handleChangeImage}
                />
            </div>
            <Button className='imageUpload__button' onClick={handleUpload}>
                Upload
            </Button>



        </div>
    )
}

export default ImageUpload