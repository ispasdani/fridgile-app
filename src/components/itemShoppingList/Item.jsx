import React from "react";
import PlusIcon from "../../assets/icons/shoppingListIcons/plusicon.svg";
import EditIcon from "../../assets/icons/shoppingListIcons/editicon.svg";
import TrashIcon from "../../assets/icons/shoppingListIcons/trashicon.svg";
import "./Item.css";
const Item = ({
  id,
  item,
  list,
  setEdit,
  setEditId,
  setItem,
  setList,
  complete,
}) => {
  //Delete Item
  const remove = (id) => {
    setList(list.filter((el) => el.id !== id));
  };

  //Mark Item completed
  const handleComplete = (id) => {
    setList(
      list.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            complete: !item.complete,
          };
        }
        return item;
      })
    );
  };

  //Edit Item
  const handleItem = (id) => {
    const editItem = list.find((el) => el.id === id);
    setItem(editItem.item);
    setEdit(true);
    setEditId(id);
  };

  return (
    <>
    <div className="item-container">
    <div className="item">
    <img
        style={{ cursor: "pointer" }}
        onClick={() => handleComplete(id)}
        src={PlusIcon}
        alt="mark item complete"
      />
      <input
        type="text"
        value={item}
        className={complete ? "complete" : ""}
      />
      <img
        style={{ cursor: "pointer" }}
        src={EditIcon}
        onClick={() => {
          const confirmBox = window.confirm("Do you want to edit this item?");
          if (confirmBox === true) {
            handleItem(id);
          }
        }}
        alt="edit item"
      />
      

      <img
        style={{ cursor: "pointer" }}
        onClick={() => {
          const confirmBox = window.confirm(
            "Are you sure you want to delete this item?"
          );
          if (confirmBox === true) {
            remove(id);
          }
        }}
        src={TrashIcon}
        alt="delete item"
      />
    </div>
    </div>
    </>

  );
};
export default Item;