import React, { useState } from 'react'
import ToDoForm from '../components/ToDoForm';
import ToDoItem from '../components/ToDoItem';
import CompletedList from './CompletedList';

const ToDoList = () => {
  //see a list of all tasks
  const [todos, setTodos] = useState([]);

  //adding new tasks to existing list of tasks
  const handleAddTodo = (newTodo) => {
    setTodos((prevTodos) => [...prevTodos, newTodo])

  };

  //view switch between tasks
    const handleToggleTodo = (todoId) => {
        setTodos((prevTodos) => prevTodos.map((todo) =>  
        todo.id === todoId ? {...todo, completed: !todo.completed} : todo
        ));
    };
    
  return (
    <div className='todo-list'>
        <h1>To Do List</h1>
        <ToDoForm onAddTodo={handleAddTodo} />
        <div className='todos'>
            {todos.map((todo) => (
                <ToDoItem
                key={todo.id}
                todo={todo}
                onToggleTodo={handleToggleTodo}
                />
            ))}
        </div>
    </div>
  )
}

export default ToDoList