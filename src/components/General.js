import { useState, useEffect } from 'react'
import FeedNav from './FeedNav'
import Posts from './Posts'
import axios from 'axios'
import { articlesURL } from '../utils/constant'
import Pagination from './Pagination'

function General(){
    const [articles, setArticles] = useState(null)
    const [error, setError] = useState('')
    const [articlesCount, setArticlesCount]=useState(null)
    const [articlePerPage, setArticlePerPage]=useState(8)
    const [currentPage, setCurrentPage] = useState(1)
    const [scrolling,setScrolling]= useState(false)

    useEffect(()=>{
        axios.get(articlesURL+`/?limit=${articlePerPage}&offset=${(currentPage-1)*articlePerPage}`)
            .then((response)=>{ setArticles(
                response.data.articles
            );
            setArticlesCount(response.data.articlesCount);
            scrolling&&window.scrollTo(0, 650);          
            }).catch((err)=>setError('Not able to fetch articles!'))
            console.log('random')
    },[currentPage,articlePerPage])
    return(<section className='articles'>
        <FeedNav/>
        <Posts articles={articles} error={error}/>
        <Pagination articlesCount={articlesCount} setCurrentPage={setCurrentPage} currentPage={currentPage} setScrolling={setScrolling}/>                    
    </section>)
}

export default General
