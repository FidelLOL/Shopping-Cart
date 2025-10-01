import { createContext, useState } from "react";


//El primer paso es crear el contexto

export const FiltersContext = createContext()

//El segundo paso es crear el proveedor del contexto

export function FiltersProvider({ children }) {
    const [filters, setFilters] = useState({
        category: 'all',
        minPrice: 0,
    })

    return (
        <FiltersContext.Provider value={{
            filters,
            setFilters
        }}
        >
       { children }
       </FiltersContext.Provider>
    )
}

//El tercer paso es consumir el contexto
// const { category, minPrice } = useContext(FiltersContext)
