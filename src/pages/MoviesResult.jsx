import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`


class MoviesResult extends Component {


    render() {
                
     const { data } = this.props.location

        return (
            <Wrapper>
                <div>
                    <br/>
                    {data}
                </div>
            </Wrapper>        
        )
    }
}

export default MoviesResult