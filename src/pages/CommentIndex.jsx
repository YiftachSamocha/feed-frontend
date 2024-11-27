import { CommentList } from "../cmps/CommentList";
import { CommentSave } from "../cmps/CommentSave";

export function CommentIndex() {
    return <section className="comment-index">
        <CommentSave />
        <CommentList />
    </section>
}