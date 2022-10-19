import React, { useState } from "react";
import Item from "../../components/itemShoppingList/Item.jsx";
import Bag from "../../assets/icons/shoppingListIcons/bag.svg";
// import { v4 as uuidv4 } from "uuid";
import "./ShoppingList.css";

const arr = () => {
  let data = localStorage.getItem("data");
  if (data) return JSON.parse(localStorage.getItem("data"));
  else return [];
};

function App() {
  const [item, setItem] = useState("");
  const [edit, setEdit] = useState(false);
  const [editId, setEditId] = useState();
  const [list, setList] = useState(arr);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    const newItem = {
      // id: uuidv4(),
      item: item,
      complete: false,
    };
    e.preventDefault();
    if (item && item.length <= 25 && !edit) {
      setList([...list, newItem]);
      setItem("");
      setError("");
    } else if (item && item.length <= 25 && edit && editId) {
      setList(
        list.map((el) => {
          if (el.id === editId) {
            return { ...el, item: item };
          }
          return el;
        })
      );
      setItem("");
      setEditId(null);
      setEdit(false);
      setError("");
    } else if (!item) setError("Please add an item");
    else if (item.length > 25) setError("Character limit is 25.");
  };

  React.useEffect(() => {
    localStorage.setItem("data", JSON.stringify(list));
  }, [list]);

  const handleChange = (e) => {
    setItem(e.target.value);
  };

  return (
    <>
    <div className="pagetitle">
        <h1>Shop Lists</h1>
        <p> Add items to your shopping list.</p>                 
    </div>
    <div className="form-container">
    <div className="form">
      
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          value={item}
          placeholder="Type items..."
          onChange={handleChange}
        />
        {edit ? (
          <button className="btn" type="submit">
            Edit Item
          </button>
        ) : (
          <button className="btn" type="submit">
            Add Item
          </button>
        )}
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
      </div>
      </div>

      <div>
        
        {list.map((c, id) => (
          <Item
            key={id}
            id={c.id}
            item={c.item}
            list={list}
            setList={setList}
            complete={c.complete}
            setItem={setItem}
            setEdit={setEdit}
            setEditId={setEditId}
          />
        ))}
      </div>
      <div className="no-list">
        <img src={Bag}/>
        <p>You don't have any items in your shopping list.</p>
      </div>
    
    </>
  );
}

export default App;