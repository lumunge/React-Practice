import React, {useState, useEffect} from 'react';
import './Todo.css';
import List from './List';
import Alert from './Alert';
import Navbar from '../Navbar/Navbar';


const getLoaclStorage = () => {
    let todo = localStorage.getItem('todo');
    if(todo){
        return JSON.parse(localStorage.getItem('todo'));
    }else{
        return [];
    }
}

export default function Todo() {

    const [name, setName] = useState('');
    const [edit, setEdit] = useState(false);
    const [todo, setTodo] = useState(getLoaclStorage());
    const [editId, setEditId] =  useState(null);
    const [alert, setAlert] = useState({show:false, msg:'', type:''});

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name){
            showAlert(true, 'danger', 'Enter A Todo');
        }else if(name && edit){
            setTodo(todo.map((todo) => {
                if(todo.id === editId){
                    return {...todo, title:name}
                }
                return todo;
            }))
            setName('')
            setEditId(null);
            setEditId(false);
            showAlert(true, 'success', 'Todo was Edited')
        }else{
            showAlert(true, 'success', 'Todo Added Successfully')
            const newTodo = { id:new Date().getTime().toString(), title:name };
            setTodo([...todo, newTodo]);
            setName('');
        }
    }

    const clearTodo = () => {
        showAlert(true, 'danger', 'Todos Were Deleted');
        setTodo([])
    }

    const showAlert = (show=false, type="", msg="") => {
        setAlert({show, type, msg});
    }

    const removeTodo = (id) => {
        showAlert(true, 'danger', 'Todo Removed');
        setTodo(todo.filter((todo) => todo.id !== id))
    }

    const editTodo = (id) => {
        const specTodo = todo.find((todo) => todo.id === id);
        setEdit(true);
        setEditId(id)
        setName(specTodo.title);
    }

    useEffect(() => {
        localStorage.setItem('todo', JSON.stringify(todo))
    }, [todo]);


    return (
        <>
        <Navbar/>
            <section className="todo">
                <h4>TODO LIST</h4>
                <div className="">
                        {alert.show && <Alert {...alert} removeAlert={showAlert} todo={todo} />}
                    </div>
                <form className="todo-form form-inline form-center" onSubmit={handleSubmit}>
                    
                    <div className="form-group">
                    <input className="form-control" type="text" placeholder="Add todo..." value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <button className="submit" type="submit">{edit ? 'Edit' : 'Add'}</button>
                </form>
                {todo.length > 0 && (
                <div className="">
                    <List
                        todos={todo}
                        removeTodo={removeTodo}
                        editTodo={editTodo}
                    />
                    <div className="clear-btn">
                        <button onClick={clearTodo}>Clear Todos</button>
                    </div>
                </div>
                )}
            </section>
        </>
    )
}

