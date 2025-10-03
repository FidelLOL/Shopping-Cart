import { useFilters } from '../hooks/useFilters'
import './Filters.css'
import { useId, useState } from 'react'    
export function Filters () {
    const { filters, setFilters } = useFilters()
   
    const [minPrice, setMinPrice] = useState(0)
    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    const handleChangeMinPrice = (event) => {
        setFilters(prevState => ({
            ...prevState,
            minPrice: event.target.value,
        }))
    }

    const handleChangeCategory = (event) => {
        setFilters(prevState => ({
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
                value={filters.minPrice}
                />

            <span>Minimun price: ${filters.minPrice}</span>

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
        </div>
        </section>
    )
}