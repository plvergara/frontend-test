import React, { Component } from 'react'
import { connect } from 'react-redux'
class FilmForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault()
        const title = this.getTitle.value
        const genres = this.getGenre.value.toLowerCase().split(' ')
        const data = {
            id: new Date(),
            title,
            genres: [...new Set(genres)],//Set  automatically remove duplicates items
            editing: false
        }
        this.props.dispatch({
            type: 'ADD_FILM',
            data
        })
        this.getTitle.value = ''
        this.getGenre.value = ''
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        required
                        type="text"
                        ref={(input) => this.getTitle = input}
                        placeholder="Enter Film Title" /><br /><br />
                    <input
                        required
                        type="text"
                        ref={(input) => this.getGenre = input}
                        placeholder="Enter Genre" /><br /><br />
                    <button>Add film</button>
                </form>
            </div>
        )
    }
}
export default connect()(FilmForm)