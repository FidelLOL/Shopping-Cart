import {useCart} from '../hooks/useCart.jsx'
import { useFilters } from '../hooks/useFilters.jsx'    
import './Footer.css'

export default function Footer({}) {
    const { filters, setFilters } = useFilters()
    const { cart } = useCart()
  return (
    <footer className='footer'>
        {
            JSON.stringify(cart,null,2)
        }
        {
            /* fdsfds */
        }
        </footer>
  )
        
        }