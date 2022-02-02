import { createContext, useState } from "react"

export const ContextRecipes = createContext()

const ProviderRecipes = (props) => {

    const [recipe, saveRecipe] = useState([])

    // crear el state del context
    const [searchRecipe, saveSearchRecipe] = useState({
        ingredient: '',
        category: ''
    })

    
   


    return (
        <ContextRecipes.Provider
            value={{
                saveSearchRecipe
            }}
        >
            {props.children}
        </ContextRecipes.Provider>
    )
}

export default ProviderRecipes