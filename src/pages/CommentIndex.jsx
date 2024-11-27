import { CommentList } from "../cmps/CommentList";
import { CommentSave } from "../cmps/CommentSave";

export function CommentIndex() {
    return <section>
        <CommentList />
        <CommentSave />
    </section>
}