import "./App.css";
import { useState, useEffect } from "react";

import ItemTodo from "./components/ItemToDo/ItemTodo";

function App() {
  useEffect(() => {
    // Inside this callback function we perform our side effects.
   });

  const [listToDo, setListTodo] = useState([]);
  const [inputName, setInputName] = useState("");
  const [editing, setEditing] = useState(false);

  const onChangeTodo = (e) => {
    const value = e.target.value;
    setInputName(value);
  };

  const addToDo = () => {
    const random = Math.floor(Math.random() * 99999);
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    setListTodo([
      ...listToDo,
      { id: random, value: inputName, editing: false, color: randomColor },
    ]);
    setInputName("");
  };

  const handleDelete = (id) => {
    const listValue = [...listToDo].filter((item) => item.id !== id);
    setListTodo(listValue);
  };

  const handleEdit = (todo) => {
    setInputName(todo.value);
    const newList = [...listToDo].map((item) => {
      if (item.id === todo.id) {
        item.editing = true;
      }
      return item;
    });
    setListTodo(newList);
    setEditing(true);
  };

  const saveEdit = () => {
    if (inputName.length < 0) return;
    const newList = [...listToDo].map((item) => {
      if (item.editing) {
        item.value = inputName;
        item.editing = false;
      }
      return item;
    });
    setInputName('')
    setListTodo(newList);
    setEditing(false);
  };

  return (
    <div className="App">
      <div className="wrap-item">
        <div className="top-input">
          <input
            value={inputName}
            onChange={onChangeTodo}
            type="text"
            placeholder="input todo"
          />
          {editing ? (
            <button onClick={saveEdit} className="btn-add">
              Save Todo
            </button>
          ) : (
            <button onClick={addToDo} className="btn-add">
              Add 
            </button>
          )}
        </div>
        <div className="wrapList">
          {listToDo.map((item) => (
            <ItemTodo
              handleEdit={handleEdit}
              handleDelete={handleDelete}
              item={item}
              key={item.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
