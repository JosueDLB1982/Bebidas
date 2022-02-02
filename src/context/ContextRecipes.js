import { createContext, useState, useEffect } from "react"
import axios from "axios"

export const ContextRecipes = createContext()

const ProviderRecipes = (props) => {

    const [recipe, saveRecipe] = useState([])

    // crear el state del context
    const [searchRecipe, saveSearchRecipe] = useState({
        ingredient: '',
        category: ''
    })

    const [consult, saveConsult] = useState(false)

    const {ingredient, category} = searchRecipe

    useEffect(() => {
        if(consult) {
            const getRecipes = async () => {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}&c=${category}`
                const result = await axios.get(url)
                saveConsult(result.data.drinks)
            }
            getRecipes() 
        }
        
    }, [searchRecipe])
   


    return (
        <ContextRecipes.Provider
            value={{
                saveSearchRecipe,
                saveConsult
            }}
        >
            {props.children}
        </ContextRecipes.Provider>
    )
}

export default ProviderRecipes