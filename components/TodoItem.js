import React from 'react';

const TodoItem = ({todo, onChangeDone}) => (
    <li>
        <button className='donebtn' onClick={onChangeDone}>Done</button>
        <span className={todo.done ? 'done' : ''}>{todo.text}</span>
        <div className='time'>{todo.starttime}</div>
        <div className='donetime'>{todo.donetime}</div>
    </li>
);

export default TodoItem;