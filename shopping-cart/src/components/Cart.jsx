import { CartIcon, ClearCartIcon} from "./Icons.jsx"
import { useId } from "react"
import { useCart } from "../hooks/useCart.jsx"
import './Cart.css'



function CartItem({thumbnail, title, price, quantity, addToCart}) {
    return (
        <li>
            <img
            src={thumbnail}
            alt={title}
            loading="lazy"
            />
            <div>
                <strong>{title}</strong> -${price}
                </div>

                <footer>
                    <small onClick={addToCart}>
                        Qty: {quantity}
                        </small>
                        <button>+</button>
                </footer>
        </li>
    )
}



export function Cart() {
    const cartCheckBoxId = useId()
    const { cart, clearCart, addToCart } = useCart()
  return (

    <>
    <label className="cart-button" htmlFor={cartCheckBoxId}>
        <CartIcon />
        </label>
        <input id={cartCheckBoxId} type="checkbox" hidden />

    <aside className="cart">
        <ul>
            {cart.map(product => (
                <CartItem 
                key={product.id}
                addToCart={() => addToCart(product)}
                {...product}
               
                />
            ))}
        </ul>
            
            

            <button onClick={clearCart}>
                <ClearCartIcon />
            </button>
    </aside>
    </>
  )
}