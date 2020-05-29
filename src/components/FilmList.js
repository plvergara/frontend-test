import React, { Component } from 'react'
import { connect } from 'react-redux'
import Film from './Film'

class ListFilm extends Component {
    render() {
        return (
            <div>
                <h1>Films</h1>
                <table className="film-table">
                    <thead>
                        <tr>
                            <th>Watched</th>
                            <th className="title">Title</th>
                            <th className="genres">Genres</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* First show  not watched film*/}
                        {this.props.films.map((film, i = 0) => !film.watched ? <Film key={film.id} film={film} /> : <tr key={i++} className="hidden"></tr>)}
                        {/* Now show  watched film*/}
                        {this.props.films.map((film, i = 0) => film.watched ? <Film key={film.id} film={film} /> : <tr key={i++} className="hidden"></tr>)}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        films: state
    }
}
export default connect(mapStateToProps)(ListFilm)