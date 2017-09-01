import * as React from 'react';
import {firebase} from "react-redux-firebase";

class TodoItemPresentation extends React.Component<any, any>{
    render(){
        const {firebase, todo, id} = this.props
        const toggleDone = () => {
            firebase.set(`/todos/${id}/done`, !todo.done)
        };

        const deleteTodo = (event: any) => {
            firebase.remove(`/todos/${id}`)
        };
        return (
            <li className="Todo">
                <input
                    className="Todo-Input"
                    type="checkbox"
                    checked={todo.done}
                    onChange={toggleDone}
                />
                {todo.text || todo.name}
                <button className="Todo-Button" onClick={deleteTodo}>
                    Delete
                </button>
            </li>
        )
    }
}
export const TodoItem = firebase()(TodoItemPresentation)