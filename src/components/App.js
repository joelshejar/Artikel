import React,{useState} from 'react'
import { BrowserRouter as Router,
         Route,Switch            
} from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Signup from './Signup'
import Login from './Login'
import NoMatch from './NoMatch'
import SinglePost from './SinglePost'

function App(){
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [user, setUser] = useState(null)
    
    console.log(isLoggedIn)
    return(
        <>
            
            <Router>
                <Header isLoggedIn={isLoggedIn} user={user}/>
                <Switch>
                        <Route path='/' exact>
                            <Home/>

                        </Route>
                        <Route path='/login' exact>
                            <Login setIsLoggedIn={setIsLoggedIn} setUser={setUser}/>
                        </Route>
                        <Route path='/signup' exact>
                            <Signup setIsLoggedIn={setIsLoggedIn} setUser={setUser}/>
                        </Route>
                        <Route path='/article/:slug' component={SinglePost}>
                            <SinglePost/>
                        </Route>
                        <Route path='*'>
                            <NoMatch/>
                        </Route>
                </Switch>
            </Router>
        </>
    )
}

export default App

