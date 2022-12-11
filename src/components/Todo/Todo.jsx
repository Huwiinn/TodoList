import React from "react";
import './Todo.css';

export default function Todo(props) {
    return (
        <div className="card">
        <h3>{props.title}</h3>
        <p>{props.contents}</p>
          {/* <div className='btn-wrap'> */}
        <button className="btn">삭제하기</button>
        <button className="btn">완료</button>
          {/* </div> */}
        </div>
    )
}