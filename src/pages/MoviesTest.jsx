import React, { Component } from 'react'


import styled from 'styled-components'


const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`


class MoviesTest extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
        }
    }

    handleChangeInputName = async event => {
        const name = event.target.value
        this.setState({ name })

    }

    handleAdd = async () => {
     
             window.alert(`Item inserted successfully`)

             this.props.history.push({
                pathname: '/movies/result',
                data: this.state.name // your data array of objects
              })

             this.setState({
                 name: '',
             })

    }

    render() {
        
        const { name } = this.state

        return (
            <Wrapper>
            <div>
            <br />
            <form>
            Movie: <input type="text" value={name} onChange={this.handleChangeInputName} />         
            <input type="button" onClick={this.handleAdd} value="Add" />
            </form>
            </div>
            </Wrapper>
        )
    }
}

export default MoviesTest