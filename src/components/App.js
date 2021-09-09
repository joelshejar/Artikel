import React from 'react'
import { BrowserRouter as Router,
         Route,Link            
} from 'react-router-dom'
import Header from './Header'
import Main from './Main'

function App(){
    return(
        <>
            
            <Router>
                <Header/>
                <Route path='/'>
                    <Main/>
                </Route>
            </Router>
        </>
    )
}

export default App

