import { useContext } from "react"
import Recipe from "./Recipe"
import { ContextRecipes } from "../context/ContextRecipes"

const RecipesList = () => {

    // Extraer las recetas
    const {recipes} = useContext(ContextRecipes)
    
    return (
        <div className="row mt-5">
            {recipes.map(receta => (
                <Recipe
                    key={receta.idDrink}
                    receta={receta}
                />
            ))}
        </div>
    )
}

export default RecipesList
