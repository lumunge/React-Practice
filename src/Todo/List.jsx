import React from 'react'

export default function List({todos, removeTodo, editTodo}) {
    return (
        <div className="">
            {todos.map((todo) => (
                <div key={todo.id} className="todo-list">
                    <div className="todo-item">
                        <p>{todo.title}</p>
                    </div>
                    <div className="action-btns">
                        <button type="button" onClick={() => editTodo(todo.id)} className="edit-btn"><i class="fa fa-pencil" aria-hidden="true"></i>
</button>
                        <button type="button" onClick={() => removeTodo(todo.id)} className="delete-btn"><i class="fa fa-trash" aria-hidden="true"></i></button>
                    </div>
                </div>
            ))}
        </div>
    )
}
