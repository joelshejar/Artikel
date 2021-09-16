import React from 'react'
import {NavLink} from 'react-router-dom'

function FeedNav({activeTab,setActiveTab}){
    let handleClick=()=>{
        setActiveTab('')
    }
    return(
        <div>   
            <div className='flex feed-nav'>
                    <NavLink onClick={handleClick} to='/' className={activeTab==='' && 'global-field'}>Global Field</NavLink>
                    {activeTab&&(
                    <NavLink to='/' className={activeTab && 'global-field'}># {activeTab}</NavLink>
                    )}
                    
            </div>
            <div className='feed'></div>
            
        </div>
    )
}

export default FeedNav
