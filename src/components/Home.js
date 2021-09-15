import {Link} from 'react-router-dom'
import Sidebar from './Sidebar.js'
import General from './General.js'


function Home(){
    
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
                <General/>                
                <section className='tags'>
                    <Sidebar/>
                </section>
                
            </div>
        </main>
        </>
    )
}

export default Home
