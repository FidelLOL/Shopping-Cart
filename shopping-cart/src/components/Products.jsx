import './Products.css'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons.jsx' 
import { useCart } from '../hooks/useCart.jsx'


export function Products ({ products }) {
    const { addToCart, removeFromCart, cart } = useCart()

    const checkProductInCart = (product) => {
        return cart.some(item => item.id === product.id)
    }

    
    return (
        <main className='products'>
            <ul>
                {products.slice(0,10).map(product => {
                    const isInCart = checkProductInCart(product)

                    return (
                    <li key={product.id}>
                        <img src={product.thumbnail}
                         alt={product.title} 
                         />
                        <div>
                            <strong>{product.title}</strong>
                            <span> - ${product.price}</span>
                        </div>
                        <div>
                            <button onClick={() => 
                                {
                                    isInCart 
                                    ? removeFromCart(product)
                                    : addToCart(product)

                                    
                                }}
                                >
                                    {isInCart
                                    ? <RemoveFromCartIcon />
                                    : <AddToCartIcon />
                                    }
                            </button>
                        </div>
                        </li>
                    )
                })}
                    
            </ul>
            </main>
    )
}   
