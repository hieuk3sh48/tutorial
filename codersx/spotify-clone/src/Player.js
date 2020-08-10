import React from 'react'
import './Player.css'
import Sidebar from './Sidebar'
import Body from './Body'
import Footer from './Footer'

function Player({ spotify }) {
    return (
        <div className='player'>
            {/* Sidebar */}
            {/* Body */}

            {/* Footer */}

            <div className='player__body'>
                <Sidebar/>
                <Body spotify={spotify}/>
                <Footer/>
            </div>

        </div>
    )
}

export default Player
