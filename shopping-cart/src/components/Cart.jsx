import { CartIcon, ClearCartIcon} from "./Icons.jsx"
import { useId } from "react" 
import './Cart.css'

export function Cart() {
    const cartCheckBoxId = useId()
  return (
    
    <>
    <label className="cart-button" htmlFor={cartCheckBoxId}>
        <CartIcon />
        </label>
        <input id={cartCheckBoxId} type="checkbox" hidden />

    <aside className="cart">
            <ul>
                <li>
                    <img src="https://cdn.dummyjson.com/product-images/25/1.png" alt="cart" loading="lazy" />
                    <div>
                        <strong>Random Object</strong>
                    </div>

                    <footer>
                        <small>
                            Qty:1
                        </small>
                        <button>
                          +
                        </button>
                        </footer>
                    
                </li>
            </ul>
            
            <button>
                <ClearCartIcon />
            </button>
    </aside>
    </>
  )
}