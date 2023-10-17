import { useContext } from "react";
import { CartContext } from "../Context";

const SingleProduct = ({prod}) => {
  const [cart, setCart] = useContext(CartContext);
  return (
    <div className="products">
      <img src={prod.imageUrl} alt={prod.name} />
      <div className="productDesc">
        <span style={{fontWeight: 700}}>{prod.name}</span>
        <span>{prod.price.toString().substring(0, 3)}</span>
      </div>
      {cart.includes(prod) ? (
        <button className="add" onClick={() =>{
          setCart(cart.filter((c) => c.id !== prod.id));
        }}>Remove From Cart</button>
      ) : (
        <button className="add" onClick={() => {
          setCart([...cart, prod]);
        }}>Add To Cart</button>
      )}
      
    </div>
  )
}

export default SingleProduct;
