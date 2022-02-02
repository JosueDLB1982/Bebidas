import { useContext } from "react"
import Recipe from "./Recipe"
import { ContextRecipes } from "../context/ContextRecipes"

const RecipesList = () => {

    // Extraer las recetas
    const {recipes} = useContext(ContextRecipes)
    console.log(recipes)
    return (
        <div className="row mt-5">
            {recipes.map(recipe => (
                <Recipe
                    key={recipe.idDrink}
                    recipe={recipe}
                />
            ))}
        </div>
    )
}

export default RecipesList
