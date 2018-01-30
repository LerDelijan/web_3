import React, {Component} from 'react';
import { Route, BrowserRouter } from "react-router-dom";
import TodoList from '../components/TodoList';
import TodoInput from '../components/TodoInput';
import TodoCounter from '../components/TodoCounter';
import alertify from 'alertify.js'

class App extends Component {
    state = { 
        todos: [
            {
                text: 'PFF',
                done: false,
                time: (new Date()).toString(),
                starttime: (new Date()).getHours() + ":" + (new Date()).getMinutes() + ":" + (new Date()).getSeconds(),
                donetime: ''
            }
        ] 
    };

    addTodo = text => {
        if (text.trim() === '') {
            alertify.alert('First you need to enter the text of the task!');
            return;
        }

        for (let i = 0; i < this.state.todos.length; i++) {
            if (text === this.state.todos[i].text) {
                alertify.alert("You have already added such a task!");
                return;
            }
        }

        const startTime = new Date();
        const st = startTime.getHours() + ":" + startTime.getMinutes() + ":" + startTime.getSeconds();
        const sTime = (startTime).toString();
        let todos = this.state.todos.concat({text, done: false, time: sTime, starttime: st, donetime: ''});
        this.setState({todos});
    }

    changeDone = i => {
        let todos = this.state.todos;
        todos[i].donetime = (new Date() - new Date(todos[i].time)) / 1000;
        todos[i].done = !todos[i].done;
        this.setState({todos});
    }

    isDisabledInput = () => this.state.todos.length >= 10;

    render() {
        return (
            <BrowserRouter>
                <div id="content">
                    <div id="content-header">
                        <h1>Todo List</h1>
                    </div>
                    <div>
                        <Route exact path="/" 
                            render={(props) => <TodoList todos={this.state.todos} 
                            onChangeDone={this.changeDone}/>}/>
                        <Route path="/add" 
                            render={(props) => <TodoInput disabled={this.isDisabledInput()} 
                                onSubmit={this.addTodo}/>}/>
                        <TodoCounter 
                            text="You have todos"
                            count={this.state.todos.length}/>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;