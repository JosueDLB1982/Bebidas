import { useContext, useState } from "react"
import { ContextCategories } from "../context/ContextCategories"

const Form = () => {

    const [search, saveSearch] = useState({
        name: '',
        category: ''
    })

    const {categories} = useContext(ContextCategories)

    // Función para leer los contenidos
    const getDataRecipe = e => {
        saveSearch({
            ...search,
            [e.target.name] : e.target.value
        })
    }

    console.log(categories)

    return (
        <form className="col-12">
            <fieldset className="text-center">
                <legend>Busca bebidas por Categoría o Ingrediente</legend>
            </fieldset>

            <div className="row mt-4">
                <div className="col-md-4">
                    <input
                        name="name"
                        className="form-control"
                        type="text"
                        placeholder="Buscar por Ingrediente"
                        onChange={getDataRecipe}
                    />
                </div>
                <div className="col-md-4">
                    <select
                        className="form-control"
                        name="category"
                        onChange={getDataRecipe}
                    >
                        <option
                            value={categories}
                        >
                            -- Selecciona Categoría --
                        </option>
                        {categories.map(category => (
                            <option
                                key={category.strCategory}
                                value={category.strCategory}
                            >
                                {category.strCategory}
                            </option>
                        ))}
                    </select>
                </div>
                
                <div className="col-md-4">
                    <input
                        type="submit"
                        className="btn btn-block btn-primary"
                        value="Buscar Bebidas"
                    />
                </div>
            </div>
        </form>
    )
}

export default Form
