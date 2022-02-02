import Header from "./components/Header"
import Form from "./components/Form"
import RecipesList from "./components/RecipesList"
import ProviderCategories from "./context/ContextCategories"
import ProviderRecipes from "./context/ContextRecipes"

function App() {
  return (
    <ProviderCategories>
      <ProviderRecipes>
        <Header />

        <div className="container mt-5">
          <div className="row">
            <Form />
          </div>
          <RecipesList />
        </div>

      </ProviderRecipes>
    </ProviderCategories>
  );
}

export default App;
