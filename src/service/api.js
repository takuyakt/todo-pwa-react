import firebase from "firebase";
import { db } from "./firebase";

export const initGet = async(uid) => {
    const todo = await db.collection("todo")
    .orderBy("createdAt", "desc")
    .where("uid", "==", uid);

    return todo.get().then((snapshot) => {
        let todos = [] ;
        snapshot.forEach((doc) => {
            todos.push({
                id: doc.id,
                content: doc.data().content,
                isCompleted: doc.data().isCompleted,
            });
        });
        return todos;
    });

}

export const addTodo = (content, uid) => {
    db.collection("todo").add({
    content: content,
    uid: uid,
    isCompleted: false,
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
    })
}
