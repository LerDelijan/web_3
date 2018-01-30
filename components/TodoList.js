import React, { Component } from "react"
import { Link } from "react-router-dom";
import TodoItem from './TodoItem';

class TodoList extends Component {
  render() {
    return (
      <div>
        <div id="todos-pane">
        <ul id="todos">
          {
            this.props.todos.map((todo, i) => (
              <TodoItem key={todo.text} todo={todo}
                onChangeDone={() => this.props.onChangeDone(i)} />)
            )
          }
        </ul>
        </div>
        <div className="link">
          <Link className='nav-link' to="/add">Add new todo</Link>
        </div>
      </div>
    )
  }
}

export default TodoList;