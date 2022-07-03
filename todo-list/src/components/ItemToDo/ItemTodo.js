import react from "react";
import "./ItemToDo.css";

const ItemTodo = ({ item, handleDelete, handleEdit }) => {
    console.log(item);
  return (
    <div style={{background:`#${item.color}`}} className="itemWrap">
      <h4>{item.value}</h4>
      <div className="wrapButton">
        <button className="btnDelete" onClick={() => handleDelete(item.id)}>Delete</button>
        <button className="btnEdit" onClick={() => handleEdit(item)}>Edit</button>
      </div>
    </div>
  );
};

export default ItemTodo;
