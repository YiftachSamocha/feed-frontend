import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { loadComments } from "../store/actions/comment.actions"

export function CommentList() {
    const comments = useSelector(state => state.commentModule.comments)
    const [filterBy, setFilterBy] = useState({ txt: '' })

    useEffect(() => {
        loadComments(filterBy)

    }, [filterBy])

    function handleChange({ target }) {
        const { value } = target
        setFilterBy({ txt: value })
    }

    return <section>
        <input type="text" value={filterBy.txt} onChange={handleChange} />
        <div>
            {comments.map((item) => {
                return <div>
                    <img src={item.img} />
                    <div>
                        <h3>{item.email}</h3>
                        <h4>{item.msg}</h4>
                    </div>
                </div>

            })}
        </div>
    </section>
}