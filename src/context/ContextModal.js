import { createContext, useState, useEffect } from "react"
import axios from "axios"

// Crear el context
export const ContextModal = createContext()

const ProviderModal = (props) => {

    // state del Provider
    const [idRecipe, saveIdRecipe] = useState(null)

    const [recipe, saveRecipe] = useState({})

    // Una vez que identificamos una receta queremos hacer otra consulta a la API, esta vez a otro endpoint
    useEffect(() => {
        const getRecipe = async () => {
            if(!idRecipe) return
            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idRecipe}`
            const result = await axios.get(url)
            saveRecipe(result.data.drinks[0])
        }
        getRecipe()
        
    }, [idRecipe])

    return (
        <ContextModal.Provider
            value={{
                saveIdRecipe
            }}
        >
            {props.children}
        </ContextModal.Provider>
    )
}

export default ProviderModal
