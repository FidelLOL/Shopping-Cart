import { products as initialProducts } from './mocks/products.json'
import { Products } from './components/Products.jsx'
import { Header } from './components/Header.jsx'
import { useState } from 'react'
import Footer from './components/Footer.jsx'
import { useFilters } from './hooks/useFilters.jsx'
import { Cart } from './components/Cart.jsx'
import { CartProvider } from './context/cart.jsx'


function App() {
  const products = initialProducts
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(products)

  
  return (
    <>
    <CartProvider>
    <Header/>
    <Cart />
    <Products products={filteredProducts} />
    <Footer />
    </CartProvider>
    
    </>
  )
}


export default App
