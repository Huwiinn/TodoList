import React, { useState } from "react";
import { v4 as uuid } from 'uuid';
import './AddForm.css';

export default function AddForm({ setTodos }) {
    const [todoValue, setTodoValue] = useState('');

    // input값 바뀌면 todoValue를 setTodoValue로 업데이트
    const handleChange = (event) => {
        setTodoValue(event.target.value);
    }

    // todo 추가
    const addTodo = (event) => {
        event.preventDefault();

        const todo = todoValue.trim();

        if (!todo) { // == false
            // setTodoValue('');
            alert('글을 작성해주세요.')
            return
        }
        setTodos((prev) => [...prev, { todo, isDone: false, id: uuid() }] )
        setTodoValue('');
    }

    return (
        <div className="addForm_container">
            <form className="addForm" onSubmit={addTodo}>
            <label className="addForm_label" htmlFor="new-todo">
                To Do
            </label>
            <input
                className="addForm_input"
                type="text"
                id="new-todo"
                name="new-todo"
                onChange={handleChange}
            ></input>

            <label className="addForm_label" htmlFor="new-todo">
                Detail
            </label>
            <input
                className="addForm_input"
                type="text"
                id="new-todo"
                name="new-todo"
                onChange={handleChange}
            ></input>

            <button>Attach</button>
            </form>
        </div>
    );
}
