import './Filters.css'
import { useId, useState } from 'react'    
export function Filters ({ onChange }) {
    const [minPrice, setMinPrice] = useState(0)
    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    const handleChangeMinPrice = (event) => {
        setMinPrice(event.target.value)
        onChange(prevState => ({
            ...prevState,
            minPrice: event.target.value,
        }))
    }

    const handleChangeCategory = (event) => {
        onChange(prevState => ({
            ...prevState,
            category: event.target.value,
        }))
    }

  return (
    <section className="filters">
        <div>
            <label htmlFor={minPriceFilterId}>Price</label>
            <input 
                type="range" 
                id={minPriceFilterId} 
                min="0"
                max="1000"
                onChange={handleChangeMinPrice}
                />

            <span>Minimun price: ${minPrice}</span>

                <div>
                    <label htmlFor={categoryFilterId}>Category</label>
                    <select id={categoryFilterId} onChange={handleChangeCategory}>
                        <option value="all">All</option>
                        <option value="smartphones">Smartphones</option>
                        <option value="laptops">Laptops</option>
                        <option value="fragrances">Fragrances</option>
                        <option value="skincare">Skincare</option>
                        <option value="groceries">Groceries</option>
                        <option value="home-decoration">Home Decoration</option>
                    </select>
                </div>
            <div>
                </div>
        </div>
        </section>
    )  
}