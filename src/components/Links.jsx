import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'

const Collapse = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})``

const Item = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

class Links extends Component {
    render() {
        return (
            <React.Fragment>
                <Link to="/" className="navbar-brand">
                Moviethon
                </Link>

                {/* <Link to={{
                        pathname: '/yourPage',
                        state: [{id: 1, name: 'Ford', color: 'red'}]
                }}> Your Page </Link> */}

                {/* this.props.location.state */}

                <Collapse>
                    <List>
                        <Item>
                            <Link to="/movies/list" className="nav-link">
                                List Movies
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/movies/create" className="nav-link">
                                Create Movie
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/movies/test" className="nav-link">
                                Test
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/movies/result" className="nav-link">
                                Result
                            </Link>
                        </Item>
                    </List>
                </Collapse>
            </React.Fragment>
        )
    }
}

export default Links