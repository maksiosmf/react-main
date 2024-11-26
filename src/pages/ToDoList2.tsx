// Tworzycie nowy page TodoList
/**
* - Wasza strona ma wyswietlic liste todos
* - Uzytkownik ma miec mozliwosc dodawania nowych todo
* - uzytkownik ma miec mozliwosc usuwania todo
*/



// Teraz każda zmiana ma być wykonana z zapytaniem do API

// GET - Pobiera listę todo
// POST - Dodaje nowe todo
// DELETE - Usuwa todo

import { useState, useEffect } from "react";
import type { Todo } from "../mocks/handlers";
import { useForm, SubmitHandler } from "react-hook-form";

type formData = {
    todoText: string;
}

export const TodoList = () => {
    const [todoList, setTodoList] = useState<Todo[]>([]);
    useEffect(() => {
        fetch("/todoList")
            .then((res) => res.json())
            .then((json) => setTodoList(json.data));
    }, []);

    const { handleSubmit, register } = useForm<formData>();

    const onSubmit: SubmitHandler<formData> = (data) => {
        const newData = { text: data.todoText };
        fetch("/toDoList2", {
            method: "POST",
            body: JSON.stringify(newData)
        })
            .then((res) => res.json())
            .then((data) => console.log(data));
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register("todoText")} />
                <button type="submit">Dodaj</button>
            </form>
            <h1>
                {todoList.map((elem) => (
                    <h1 key={elem.id}>{elem.text}</h1>
                ))}
            </h1>
        </>
    );
};