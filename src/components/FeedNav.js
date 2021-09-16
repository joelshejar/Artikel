import React from 'react'
import {NavLink} from 'react-router-dom'

function FeedNav(){
    return(
        <div>   <div className='flex feed-nav'>
                    <h5 className='global-field'>Global Field</h5>
                    <h5 className='global-field'>Global Field</h5>
                </div>
                
                <div className='feed'></div>
            
        </div>
    )
}

export default FeedNav
