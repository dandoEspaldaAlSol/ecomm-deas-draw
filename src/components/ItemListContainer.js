import Contador from "./Contador";
const ItemListContainer = (props) => {
    


    return(
    <>
    <Contador /> 
    
    <hr/>
    <h2>Dibujo : {props.id}</h2>
    <p>{props.formato}</p>
    <p>{props.serie}</p>
    <hr/>
    
    </>
    );
}

export default ItemListContainer