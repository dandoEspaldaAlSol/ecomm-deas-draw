import Contador from "./Contador";
import React from "react";
import image from "../img/1.jpg";
const ItemListContainer = (props) => {
    

const onAdd =(quantity)=>{
console.log(`compraste ${quantity} unidades`);
}

<Contador initial={1} 
 stock={5}
 onAdd={onAdd}/>

    return(
    <>
     <div className="container col-2">
    
    <hr/>
    
    <img className="container" src={image} alt="foto producto"></img>
    <h2>Dibujo :</h2>
    <h3> {props.id}</h3>
    <p>{props.formato}</p>
    <p>{props.serie}</p>
    <p>{props.stock}</p>
    

    <hr/>
    
    <Contador initial={1} 
 stock={5}
 onAdd={onAdd}/>
    
    </div>
    </>
    );
}

export default ItemListContainer