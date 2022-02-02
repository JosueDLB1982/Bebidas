import axios from "axios"
import { createContext, useState, useEffect } from "react" 

// Crear el Context

export const ContextCategories = createContext()

// Provider es donde se encuentran las funciones y state

const ProviderCategories = (props) => {
    // crear el state del context
    const [categories, saveCategories] = useState([])

    // Ejecutar el llamdo a la API
    useEffect(() => {
        const getCategories = async () => {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'

            const categories = await axios.get(url)

            saveCategories(categories.data.drinks)
        }
        getCategories()
    }, [])


    return (
        <ContextCategories.Provider
            value={{
                categories // Con el propósito de hacer las categorías disponibles en los otros componentes, las pasamos aquí
            }}
        >
            {props.children}
        </ContextCategories.Provider>
    )
}

export default ProviderCategories