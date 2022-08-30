import Contador from "./Contador";
import React from "react";
const ItemListContainer = (props) => {
    

const onAdd =(quantity)=>{
console.log(`compraste ${quantity} unidades`);
}

    return(
    <>
    <Contador initial={1} stock={5} onAdd={onAdd}/> 
    
    <hr/>
    <h2>Dibujo : {props.id}</h2>
    <p>{props.formato}</p>
    <p>{props.serie}</p>
    <hr/>
    
    </>
    );
}

export default ItemListContainer