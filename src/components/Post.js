import React from 'react'
import {Link} from 'react-router-dom'

function Post({...article}){
    return(
        <>
            <div>
                <Link to='/profile'>
                    <img className='author-img' src={article.author.image} alt='Author'/>
                </Link>
                <div className='post-details'>
                    <Link to='/profile'>
                        <p className='post-author'>{article.author.username}</p>
                    </Link>
                    <time className='post-time'>{article.createdAt.slice(0,10)}</time>
                </div>
            </div>
            <div className='like-btn'>
                <span>&hearts;</span>
                <span>{article.favoritesCount}</span>
            </div>
            <Link to='/singlepost'>
                <div className='post-body'>
                    <h2 className='post-title'>
                        {article.title}
                    </h2>
                    <p className='post-text'>
                        {article.description}
                    </p>
                </div>
            </Link>
            <Link className='read-more-btn' to='/singlepost'>
                Read More
            </Link>
        </>
    )
}

export default Post
