import { useState } from 'react';
import React from 'react';
import './App.css';
import { v4 as uuid } from 'uuid'
import styled from 'styled-components';

import Header from './components/Header/Header';
import AddForm from './components/AddForm/AddForm';
import TodoCard from './components/TodoCard/TodoCard';

export default function App() {
  const [todos, setTodos] = useState(initialTodos);
  console.log('uuid생성 : ',uuid());

  return (
    <div className="container">
      {/* 제목 */}
      <Header>Todo List</Header>
      {/* todo 생성칸 */}
      <AddForm setTodos={setTodos}/>

      {/* todo card */}
      <div className="todo-list-container">
        <TodoCard title="Acitve 🏃‍♂️" />
        <TodoCard title="Done 🧍‍♂️" />
      </div>
    </div>
  );
}

// todo 초기값
const initialTodos = [
  {
    id : uuid(),
    isDone : false,
    todo : '자바스크립트',
  },
  {
    id : uuid(),
    isDone : false,
  },
  {
    id : uuid(),
    isDone : false,
  },
]

