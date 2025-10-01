import './Filters.css'
export function Filters () {
  return (
    <section className="filters">
        <div>
            <label htmlFor="price">Price</label>
            <input 
                type="range" 
                id="price" 
                min="0" 
                max="1000"
                />
                <div>
                    <label htmlFor="category">Category</label>
                    <select id="category" name="category">
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