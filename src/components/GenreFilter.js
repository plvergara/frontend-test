import React, { Component } from 'react'
import { connect } from 'react-redux'
class GenreFilter extends Component {

    render() {

        return (
            <div>
                <input type="radio" value="Horror" name="genre"
                    onChange={() =>
                        this.props.dispatch({
                            type: 'FILTER_FILM',
                            genre: "horror"
                        })} /> Horror
                <input type="radio" value="Romance" name="genre"
                    onChange={() =>
                        this.props.dispatch({
                            type: 'FILTER_FILM',
                            genre: "romance"
                        })} /> Romance
                <input type="radio" value="Comedy" name="genre"
                    onChange={() =>
                        this.props.dispatch({
                            type: 'FILTER_FILM',
                            genre: "comedy"
                        })} /> Comedy
                <input type="radio" value="Reset" name="genre" onChange={() =>
                    this.props.dispatch({
                        type: 'FILTER_FILM',
                        genre: " "
                    })} /> Reset
            </div>
        )
    }
}
export default connect()(GenreFilter) 