import { createContext, useState, useEffect } from "react"
import axios from "axios"

// Crear el context
export const ContextModal = createContext()

const ProviderModal = (props) => {

    // state del Provider
    const [idRecipe, saveIdRecipe] = useState(null)

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
