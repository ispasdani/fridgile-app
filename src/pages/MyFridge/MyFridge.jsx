import React from "react";
import Card from "../../components/Card/Card.jsx";
import Carrot from "../../assets/images/carrot.svg";
import Banana from "../../assets/images/banana.svg";
import Dairy from "../../assets/images/dairy.svg";
import Meat from "../../assets/images/meat.svg";
import Fish from "../../assets/images/fish.svg";
import Plus from "../../assets/images/plus.svg";
import "./MyFridge.css"


export default function Myfridge() {
return (
<section className="left-side">
    <div className="headline">
        <p>My fridge</p>
    </div>
    <div className="grid-container">
<div id="add">

    <Card 
  icon={Plus}   

    />

</div>
<div id="preset">
<Card 
    icon={Carrot}
    title='Vegetables'
    />
     </div>
     <div id="preset">
   
   <Card 
  icon={Banana}
  title='Fruits'
  />
  </div>
     <div id="preset">
    <Card 
    icon={Dairy}
    title='Dairy'
    />
    </div>
    <div id="preset">
    <Card 
    icon={Meat}
    title='Meat'
    />
        </div>
        <div id="preset">
    <Card 
    icon={Fish}
    title='Fish and seafood'
    />
     </div>
     
    </div>
    
</section>

);
}