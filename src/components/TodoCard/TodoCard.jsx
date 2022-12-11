import React from "react";
import './TodoCard.css';
import Todo from "../Todo/Todo";

export default function TodoCard(props) {
    return (
    <div className="Todo-wrap">
        <p className="title">{props.title}</p>
        <Todo title="빨래하기" contents="수건 빨래 돌리기"></Todo>
    </div>
    );
}