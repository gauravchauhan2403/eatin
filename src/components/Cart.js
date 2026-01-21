import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(clearCart())
  }

  return (
    <div>
      {cartItems.length ==0 ?
          (<h1 className="text-center m-auto">Cart is empty, Add items..</h1>) : (
          <div className="container p-2 m-auto w-6/12 text-center">
          <button onClick={handleClick} className="p-2 border-2 border-white">Clear Cart</button>
          {cartItems.map((item) => (
            <div key={item.id} className=" p-2 m-auto border-2 bg-gray-300 ">
            <h3 className="p-2 m-2 text-black">{item.name}</h3>
          </div>  
         ))}
         </div>
        )
      }
      
    </div>
  )
}

export default Cart;