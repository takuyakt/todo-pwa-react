import firebase from "firebase";
import { db } from "./firebase";

export const addTodo = (content, uid) => {
    db.collection("todo").add({
    content: content,
    uid: uid,
    isCompleted: false,
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
    })
}
