import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from './components'
import { MoviesList, MoviesInsert, MoviesUpdate, MoviesTest, MoviesResult } from './pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/movies/list" exact component={MoviesList} />
                <Route path="/movies/create" exact component={MoviesInsert} />
                <Route path="/movies/update/:id" exact component={MoviesUpdate} />
                <Route path="/movies/test" exact component={MoviesTest} />
                <Route path="/movies/result" exact component={MoviesResult} />
            </Switch>
        </Router>
    )
}

export default App