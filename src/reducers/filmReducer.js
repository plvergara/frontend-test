const filmReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_FILM':
            return state.concat([action.data])
        case 'DELETE_FILM':
            return state.filter(film => film.id !== action.id)
        case 'WATCHED_FILM':
            return state.map(film => film.id === action.id ? { ...film, watched: !film.watched } : film)
        default:
            return state
    }
}

export default filmReducer