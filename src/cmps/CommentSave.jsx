import { useState } from "react"
import { addComment } from "../store/actions/comment.actions"

export function CommentSave() {
    const [criteria, setCriteria] = useState({ email: '', msg: '' })
    function handleChange({ target }) {
        const { name, value } = target
        if (name === 'email') {
            setCriteria(prev => ({ ...prev, email: value }))
        }
        else if (name === 'msg') {
            setCriteria(prev => ({ ...prev, msg: value }))
        }
    }

    async function save() {
        await addComment(criteria)
        setCriteria({ email: '', msg: '' })
    }

    return <section className="comment-save">
        <div>
            <input type="text" placeholder="Email" name="email" onChange={handleChange} value={criteria.email} />
            <textarea name="msg" placeholder="Message" onChange={handleChange} value={criteria.msg} ></textarea>
            <button onClick={save}>Submit</button>
        </div>
    </section>
}