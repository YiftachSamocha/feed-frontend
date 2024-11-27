export const SET_COMMENTS = 'SET_COMMENTS'
export const ADD_COMMENT = 'ADD_COMMENT'

const initialState = {
    comments: [],
}

export function commentReducer(state = initialState, action) {
    var newState = state
    switch (action.type) {
        case SET_COMMENTS:
            newState = { ...state, comments: action.comments }
            break

        case ADD_COMMENT:
            newState = { ...state, comments: [action.comment, ...state.comments] }
            break

        default:
    }
    return newState
}



