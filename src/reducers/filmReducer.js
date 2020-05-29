const filmReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_FILM':
            return state.concat([action.data])
        case 'DELETE_FILM':
            return state.filter(post => post.id !== action.id)
        default:
            return state
    }
}

export default filmReducer