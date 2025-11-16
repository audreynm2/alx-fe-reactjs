import AddRecipeForm from './components/AddRecipeForm'
import RecipeList from './components/RecipeList'
import './App.css' // Assuming you keep the default CSS for now

function App() {
  return (
    <div className="app-container">
      <header>
        <h1>Recipe Sharing Application 🍳</h1>
        <p>Managing state with **Zustand**</p>
      </header>
      <main>
        <AddRecipeForm />
        <RecipeList />
      </main>
    </div>
  )
}

export default App