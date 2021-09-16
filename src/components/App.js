import React from 'react'
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
    return(
        <>
            
            <Router>
                <Header/>
                <Switch>
                        <Route path='/' exact>
                            <Home/>

                        </Route>
                        <Route path='/login' exact>
                            <Login/>
                        </Route>
                        <Route path='/signup' exact>
                            <Signup/>
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

