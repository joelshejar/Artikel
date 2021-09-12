import Loader from './Loader.js'
import Post from './Post'

function Posts({articles, error}){
    if(error){
        return <p>{error}</p>
    }
    if(!articles){
        return <Loader/>
    }
    return articles.map((article)=><Post className='post' key={article.slug} {...article}/>)
}

export default Posts
