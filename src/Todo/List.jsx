import React from 'react'

export default function List({todos, removeTodo, editTodo}) {
    return (
        <div className="todo-list">
            {todos.map((todo) => (
                <article key={todo.id}>
                    <p>{todo.title}</p>
                    <button type="button" onClick={() => editTodo(todo.id)} className="edit-btn">EditIcone</button>
                    <button type="button" onClick={() => removeTodo(todo.id)} className="delete-btn">Delete Icone</button>
                </article>
            ))}
        </div>
    )
}
