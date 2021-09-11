import React,{useState,useEffect} from 'react'
import { articlesURL } from '../utils/constant'
import axios from 'axios'
import Loader from './Loader.js'
import Post from './Post'

function Posts(){
    const [articles, setArticles] = useState(null)
    const [error, setError] = useState('')
    useEffect(()=>{
        axios.get(articlesURL+'/?limit=8')
            .then((response)=>{ setArticles(
                response.data.articles
            )          
            }).catch((err)=>setError('Not able to fetch articles!'))
    },[])
    if(error){
        return <p>{error}</p>
    }
    if(!articles){
        return <Loader/>
    }
    return articles.map((article)=><Post className='post' key={article.slug} {...article}/>)
}

export default Posts
