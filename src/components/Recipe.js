import { useContext, useState } from "react"
import { ContextModal } from "../context/ContextModal"

import Modal from "@material-ui/core/Modal"
import { makeStyles } from "@material-ui/core/styles"

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const Recipe = ({ receta }) => {

    //configuración del modal de material-ui
    const [modalStyle] = useState(getModalStyle)
    const [open, setOpen] = useState(false)

    const classes = useStyles()

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClouse = () => {
        setOpen(false)
    }

    // Extraemos los valores del context
    const { recipe, saveIdRecipe, saveRecipe } = useContext(ContextModal)
    
    // Formatea y muestra los ingredientes
    const showIngredients = recipe => {
        let ingredients = []
        for(let i = 1; i<16; i++) {
            if(recipe[`strIngredient${i}`]) {
                ingredients.push(
                    <li>{recipe[`strIngredient${i}`]} {recipe[`strMeasure${i}`]}</li>
                )
            }
        }
        return ingredients
    }

    return (
        <div className="col md-4 mb-3">
            <div className="card">
                <h2 className="card-header">{receta.strDrink}</h2>
                <img className="card-img-top" src={receta.strDrinkThumb} alt={`Imagen de ${receta.strDrink}`} />
                <div className="card-body">
                    <button
                        type="button"
                        className="btn btn-block btn-primary"
                        onClick={() => {
                            saveIdRecipe(receta.idDrink)
                            handleOpen()
                        }}
                    >
                        Ver Receta
                    </button>
                    <Modal
                        open={open}
                        onClose={() => {
                            saveIdRecipe(null)
                            saveRecipe({})
                            handleClouse()
                        }}
                    >
                        <div style={modalStyle} className={classes.paper}>
                            <h2>{recipe.strDrink}</h2>
                            <h3 className="mt-4">Instrucciones</h3>
                            <p>
                                {recipe.strInstructions}
                            </p>
                            <img className="img-fluid my-4" src={recipe.strDrinkThumb} alt={recipe.strDrink}/>

                            <h3>Ingredientes y Cantidades</h3>
                            <ul>
                                {showIngredients(recipe)}
                            </ul>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    )
}

export default Recipe
