import { commentService } from '../../services/comment'
import { store } from '../store'
import { ADD_COMMENT, SET_COMMENTS } from '../reducers/comment.reducer'

export async function loadComments(filterBy) {
    try {
        const comments = await commentService.query(filterBy)
        store.dispatch(getCmdSetComments(comments))
    } catch (err) {
        console.log('Cannot load comments', err)
        throw err
    }
}


export async function addComment(comment) {
    try {
        const savedComment = await commentService.save(comment)
        store.dispatch(getCmdAddComment(savedComment))
        return savedComment
    } catch (err) {
        console.log('Cannot add comment', err)
        throw err
    }
}


// Command Creators:
function getCmdSetComments(comments) {
    return {
        type: SET_COMMENTS,
        comments
    }
}

function getCmdAddComment(comment) {
    return {
        type: ADD_COMMENT,
        comment
    }
}



