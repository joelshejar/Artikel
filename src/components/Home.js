import React,{useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { articlesURL } from '../utils/constant'
import FeedNav from './FeedNav'
import Posts from './Posts'
import Sidebar from './Sidebar.js'
import Pagination from './Pagination'

function Home(){
    const [articles, setArticles] = useState(null)
    const [error, setError] = useState('')
    const [articlesCount, setArticlesCount]=useState(null)
    const [articlePerPage, setArticlePerPage]=useState(8)
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(()=>{
        axios.get(articlesURL+`/?limit=${articlePerPage}&offset=${(currentPage-1)*articlePerPage}`)
            .then((response)=>{ setArticles(
                response.data.articles
            );
            setArticlesCount(response.data.articlesCount)          
            }).catch((err)=>setError('Not able to fetch articles!'))
            console.log('random')
    },[currentPage,articlePerPage])
    return(
        <>
        <main>
            <section class="flex container section-one">
                <article class="hero">
                    <h1>
                        Artikel is a place where good ideas find you
                    </h1>
                    <p>
                    It's easy and free to post your thinking on any topic and connect with millions of readers.
                    </p>
                    <Link to='/signup' className="btn">Start Writing</Link>
                </article>
                <div class="hero-img">
                    <img src="/images/hero.png" alt=""/>
                </div>
            </section>
            <div className='container flex flex-home'>
                <section className='articles'>
                    <FeedNav/>
                    <Posts articles={articles} error={error}/>
                    <Pagination articlesCount={articlesCount} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
                </section>
                <section class='tags'>
                    <Sidebar/>
                </section>
                
            </div>
        </main>
        </>
    )
}

export default Home
