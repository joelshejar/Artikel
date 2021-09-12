import React from 'react'
import {Link} from 'react-router-dom'

function Post({...article}){
    return(
        <>  
        <div className='post'>

            <div className='flex'>
                <div className='img-author flex'>
                    <Link className='img-link' to='/profile'>
                        <img className='author-img' src={article.author.image} alt='Author'/>
                    </Link>
                    <div className='post-details'>
                        <Link className='username-link' to='/profile'>
                            <p className='post-author'>{article.author.username}</p>
                        </Link>
                        <time className='post-time'>{article.createdAt.slice(0,10)}</time>
                    </div>
                </div>
                <div className='like-btn'>
                    <span>&hearts;</span>
                    <span className='like-count'>{article.favoritesCount}</span>
                </div>
            </div>
            <Link className='post-body-link' to='/singlepost'>
                <div className='post-body'>
                    <h2 className='post-title'>
                        {article.title}
                    </h2>
                    <p className='post-text'>
                        {article.description.slice(0,200).concat(' .....')}
                    </p>
                </div>
            </Link>
            <Link className='read-more-btn' to='/singlepost'>
                Read More
            </Link>
        </div>
        </>
    )
}

export default Post
