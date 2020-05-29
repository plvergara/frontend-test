import React, { Component } from 'react'
import { connect } from 'react-redux'
class Film extends Component {

    render() {

        return (
            <tr className="item">
                <td>
                    <form>
                        <input type="checkbox"
                            checked={this.props.film.watched}
                            onClick={() =>
                                this.props.dispatch({
                                    type: 'WATCHED_FILM',
                                    id: this.props.film.id
                                })}
                        />
                    </form>
                </td>
                <td className="item-title">{this.props.film.title}</td>
                <td className="item-genres">{this.props.film.genres.map((genre, i = 0) => (
                    <p key={i++} className="genre" > {genre}</p>
                ))}</td>
                <td>
                    <button
                        onClick={() =>
                            this.props.dispatch({
                                type: 'DELETE_FILM',
                                id: this.props.film.id
                            })}
                    >Delete</button>
                </td>
            </tr >
        )
    }
}
export default connect()(Film) 