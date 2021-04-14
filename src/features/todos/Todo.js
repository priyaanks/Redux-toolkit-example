import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, allTodos } from "./todoSlice";
import uniqid from "uniqid";
import styles from "./Todo.module.css";

export function Todo() {
  const todoList = useSelector(allTodos);
  const dispatch = useDispatch();
  const [todoItem, setTodoItem] = useState("");

  const addTodoItem = () => {
    if (todoItem) {
      dispatch(addTodo({ id: uniqid(), item: todoItem }));
      setTodoItem("");
    }
  };

  console.log("🧿🧿🧿 Rendering - TODO Component 🧿🧿🧿");

  return (
    <div>
      <h3>Your Todos</h3>
      <div className={styles.row}>
        <div className={styles.card}>
          <ul>
            {todoList &&
              todoList.map((todo) => {
                return <li key={todo.id}>{todo.item}</li>;
              })}
          </ul>
        </div>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label='Enter your todo'
          value={todoItem}
          placeholder='Enter your todo'
          onChange={(e) => setTodoItem(e.target.value)}
        />
        <button className={styles.button} onClick={addTodoItem}>
          Add Todo
        </button>
      </div>
    </div>
  );
}
