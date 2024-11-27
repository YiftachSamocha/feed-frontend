export const SET_COMMENTS = 'SET_COMMENTS'
export const SET_COMMENT = 'SET_COMMENT'
export const REMOVE_COMMENT = 'REMOVE_COMMENT'
export const ADD_COMMENT = 'ADD_COMMENT'
export const UPDATE_COMMENT = 'UPDATE_COMMENT'
export const ADD_COMMENT_MSG = 'ADD_COMMENT_MSG'

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
            newState = { ...state, comments: [...state.comments, action.comment] }
            break
        
        default:
    }
    return newState
}



