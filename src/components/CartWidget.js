

const ItemListContainer = (id,formato, serie) => {
    return(
        <>
    <h2> Dibujo : {id}</h2>
    <div>
      <p>{formato}</p>
      <p>{serie} </p>
    </div>
    <hr/>
   
    
    
        </>
    );
}
  
const CartWidget = () => {
    return (
        <>
            {ItemListContainer("1", "a4", "paisajes")}
            {ItemListContainer("2", "a3", "retratos")}
        </>
    );
}

  
export default CartWidget;