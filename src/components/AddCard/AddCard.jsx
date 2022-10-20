import React, { useEffect, useState } from "react";
import "./AddCard.css"


export default function AddCard({ icon }) {
    const [category, setNewCategory] = useState(true);
const [newCard, setNewCard] = useState("");


    return (
 <div className="addcard-category" >
{category ? (<div className="add-category-icon" onClick={() => setNewCategory(false)}>
    <img src={icon} alt="category icon"></img>
</div>) : (<div className="popup" >
    <button className="close-btn" onClick={() => setNewCategory(true)}> Close</button>
    <p>Name your category...</p>
    <input type="text" placeholder="Name of the new category..." onChange={(event) => {
        setNewCard(event.target.value);
      }}></input>
    <button type="submit" className="save-btn">Save</button>
</div>)}

</div>

    
    );
}

