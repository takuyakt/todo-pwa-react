import React, {useState, useEffect, useContext} from "react" ;
import * as Api from "../service/api"
import { signInWithGoogle } from "../service/firebase";
import dig from 'object-dig';
import AuthProvider, { AuthContext } from "../providers/AuthProvider";

const ToDoList = (props) => {

    const todoList = props.todos.map((todo) => {
        return(
            <li key={todo.id}>{todo.content}</li>
        );
    });

    return(
        <div>
            <h2>あなたのTodo</h2>
            <ul>{todoList}</ul>
        </div>
    )

}

export default ToDoList;