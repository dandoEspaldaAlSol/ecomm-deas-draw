
import ItemListContainer from "./ItemListContainer";
import image from "../img/1.jpg";
import imageDos from "../img/2.jpg"

const CartWidget = () => {
    
const data = [
    {
        id:1,
        formato:"a4",
        serie:"paisaje",
        img:<img className="container" src={image} alt="foto producto"></img>
    },
    {
        id:2,
        formato:"a3",
        serie:"retrato",
        img:<img className="container" src={imageDos} alt="foto producto"></img>
        

    }

]

    return(
    <div className="container row">
    <ItemListContainer  
    img={data[0].img} 
    id={data[0].id}
    formato={data[0].formato}
    serie={data[0].serie}
    
    />
    <ItemListContainer  
   img={data[1].img} 
    id={data[1].id}
    formato={data[1].formato}
    serie={data[1].serie}
    
    />
    
    </div>

    
    );
}
  


  
export default CartWidget;