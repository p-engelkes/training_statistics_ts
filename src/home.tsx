import * as React from 'react';
import {isLoaded, isEmpty, firebaseConnect} from "react-redux-firebase";
import {connect} from "react-redux";
import {TodoItem} from "./todo.items";

class HomePresentation extends React.Component<any, any> {
    private newTodo: HTMLInputElement;

    constructor(props: any) {
        super(props);
        console.log(props)
    }

    handleAdd = () => {
        const {firebase} = this.props;
        firebase.push('/todos', {text: this.newTodo.value, done: false})
        this.newTodo.value = ''
    };

    render() {
        const {todos} = this.props;

        console.log('todos;', todos);

        const todosList = (!isLoaded(todos))
            ? 'Loading'
            : (isEmpty(todos))
                ? 'Todo list is empty'
                : Object.keys(todos).map((key) => (
                    <TodoItem key={key} id={key} todo={todos[key]}/>
                ));
        return (
            <div className='App'>
                <div className='App-header'>
                    <h2>react-redux-firebase demo</h2>
                </div>
                <div className='App-todos'>
                    <h4>
                        Loaded From
                        <span className='App-Url'>
              <a href='https://redux-firebasev3.firebaseio.com/'>
                redux-firebasev3.firebaseio.com
              </a>
            </span>
                    </h4>
                    <h4>Todos List</h4>
                    {todosList}
                    <h4>New Todo</h4>
                    <input type='text' ref={(input: HTMLInputElement) => {
                        this.newTodo = input
                    }}/>
                    <button onClick={this.handleAdd}>
                        Add
                    </button>
                </div>
            </div>
        )
    }
}

const wrappedHome = firebaseConnect(['todos'])(HomePresentation);
export const Home = connect(
    ({firebase: {data: {todos}}}) => ({
        todos,
    })
)(wrappedHome);