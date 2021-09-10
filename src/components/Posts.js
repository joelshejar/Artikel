import React,{useState,useEffect} from 'react'
import { articlesURL } from '../utils/constant'
import axios from 'axios'
import Loader from './Loader.js'
import Post from './Post'

function Posts(){
    const [articles, setArticles] = useState(null)
    useEffect(()=>{
        axios.get(articlesURL+'/?limit=8')
            .then((response)=>{
                setArticles(
                    response.data.articles
                )
            })
    },[])
    if(!articles){
        return <Loader/>
    }
    return articles.map((article)=><Post key={article.slug} {...article}/>)
}

export default Posts
