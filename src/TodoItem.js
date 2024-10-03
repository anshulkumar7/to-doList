import React from 'react';

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <span
        className="todo-text"
        onClick={() => toggleComplete(todo.id)}
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none',
          cursor: 'pointer',
        }}
      >
        {todo.title}
      </span>
      <div className="todo-actions">
        <button className={`complete-btn ${todo.completed ? 'undo' : 'complete'}`} onClick={() => toggleComplete(todo.id)}>
          {todo.completed ? 'Undo' : 'Complete'}
        </button>
        <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>Delete</button>
      </div>
    </li>
  );
};

export default TodoItem;
