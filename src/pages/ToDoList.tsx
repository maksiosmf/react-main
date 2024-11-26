// Tworzycie nowy page TodoList
/**
* - Wasza strona ma wyswietlic liste todos
* - Uzytkownik ma miec mozliwosc dodawania nowych todo
* - uzytkownik ma miec mozliwosc usuwania todo
* - uzytkownik ma miec mozliwosc zaznaczania, ktore todo zostalo skonczone (completed)
* - *uzytkownik ma miec mozliwosc modyfikowania
*/

import React, { useState, ChangeEvent } from 'react';

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

export const ToDoList = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [newTodo, setNewTodo] = useState('');

    const addTodo = () => {
        if (newTodo.trim() !== '') {
            setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
            setNewTodo('');
        }
    };

    const removeTodo = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const toggleTodo = (id: number) => {
        setTodos(
            todos.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const updateTodo = (id: number, newText: string) => {
        setTodos(
            todos.map(todo =>
                todo.id === id ? { ...todo, text: newText } : todo
            )
        );
    };

    const handleNewTodoChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTodo(e.target.value);
    };

    const handleTodoTextChange = (id: number, e: ChangeEvent<HTMLInputElement>) => {
        updateTodo(id, e.target.value);
    };

    return (
        <div>
            <h1>Lista ToDo</h1>
            <input
                type="text"
                value={newTodo}
                onChange={handleNewTodoChange}
            />
            <button onClick={addTodo}>Dodaj</button>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>  
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => toggleTodo(todo.id)}
                        />
                        <input
                            type="text"
                            value={todo.text}
                            onChange={(e) => handleTodoTextChange(todo.id, e)}
                        />
                        <button onClick={() => removeTodo(todo.id)}>Usuń</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};