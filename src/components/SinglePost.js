import React,{useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {articlesURL} from '../utils/constant'
import { useParams } from 'react-router-dom'
import Loader from './Loader'

function SinglePost(){
    const [article, setArticle]= useState('null')
    const [error, setError] = useState('')
    let {slug}=useParams()
    useEffect(()=>{
        axios.get(articlesURL+`/${slug}`)
            .then((response)=>{ setArticle(
                response.data.article
            );          
            }).catch((err)=>setError('Not able to fetch articles!'))
            console.log('random')
    },[slug])
    console.log(article.author)
    if(error){
        return <p>{error}</p>
    }
    if(!article){
        return <Loader/>
    }
    return(   
        <>
        <main className='container'>
            <div className='single-article'>
                <h1>{article.title}</h1>
                <div className='flex article'>
                    <div className='author-img'>
                        {/* <img src={article.author.image} alt='author'/> */}
                    </div>
                    <div className='author-username'>
                        {/* <h6 className='username'>{article.author.username}</h6> */}
                        <h6>{article.createdAt}</h6>
                    </div>
                    <div className='follow-btn btn'>
                        Follow
                    </div>
                </div>
            </div>
            <section>
                <article className='article-body'>
                    {article.body}
                </article>
            </section>
        </main> 
        <footer className='container'>
            <p>
                <Link to='/login'>Sign in</Link> or
                <Link to='/signup'> Sign up</Link> to add comments on this article
            </p>
        </footer>  
        </>  

    )
}

export default SinglePost