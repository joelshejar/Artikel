import React,{useState,useEffect} from 'react'
import { tagsURL } from '../utils/constant'
import axios from 'axios'
import Loader from './Loader.js'


function Sidebar(){
    const [tags, setTags] = useState(null)
    const [displayTags, setDisplayTags] = useState(tags!==null?tags.slice(1,17):[])
    const [error, setError] = useState('')
    const [read, setRead] = useState('active')
    function handleTags(){
        setDisplayTags(tags.slice(1,tags.length));
        setRead('hidden');
    }
    useEffect(()=>{
        axios.get(tagsURL)
            .then((response)=>{ setTags(
                response.data.tags
            );
            setDisplayTags(
                response.data.tags.slice(1,17)
            )          
            }).catch((err)=>setError('Not able to fetch tags!'))
    },[])
    
    if(error){
        return <p>{error}</p>
    }
    if(!tags){
        return <Loader className='tags-loader'/>
    }
    console.log(tags)
    return (<div>
            <h3>Popular Tags</h3>
            {displayTags.map((tag)=>(

            <h4 key={tag}>{tag}</h4>
            ))}
            <h5 className={read==='active'?'active':'hidden'} onClick={()=>handleTags()}>More tags</h5>
            </div>
    )
}

export default Sidebar