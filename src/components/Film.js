import React, { Component } from 'react'
import { connect } from 'react-redux'
class Film extends Component {

    render() {
        return (
            <tr className={this.props.film.hidden ? "item hidden" : "item"}>
                <td>
                    <input type="checkbox"
                        defaultChecked={this.props.film.watched}
                        onClick={() =>
                            this.props.dispatch({
                                type: 'WATCHED_FILM',
                                id: this.props.film.id
                            })}
                    />
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