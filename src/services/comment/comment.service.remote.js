import { httpService } from '../http.service'

export const commentService = {
    query,
    save,
  
}

async function query(filterBy = { txt: '' }) {
    return httpService.get(`comment`, filterBy)
}


async function save(comment) {
    var savedComment
    savedComment = await httpService.post('comment', comment)
    return savedComment
}

