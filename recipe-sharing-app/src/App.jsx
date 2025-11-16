import AddRecipeForm from './components/AddRecipeForm'
import RecipeList from './components/RecipeList'
import RecipeDetails from './components/RecipeDetails' // Import the new details component
import { Routes, Route } from 'react-router-dom' // Import routing components
import './App.css' 

// Helper component to structure the home page content
const Home = () => (
  <>
    <AddRecipeForm />
    <hr style={{ width: '100%', borderTop: '1px solid #eee' }} />
    <RecipeList />
  </>
);

function App() {
  return (
    <div className="app-container" style={{ minHeight: '100vh', padding: '20px' }}>
      <header style={{ marginBottom: '30px', textAlign: 'center' }}>
        <h1 style={{ color: '#007bff' }}>Recipe Sharing Application 🍳</h1>
        <p style={{ color: '#6c757d' }}>Managing complex state with **Zustand** and **React Router**</p>
      </header>
      <main style={{ maxWidth: '900px', width: '100%', margin: '0 auto' }}>
        <Routes>
          {/* Route for the main page (list and add form) */}
          <Route path="/" element={<Home />} />
          {/* Route for individual recipe details, using a dynamic ID parameter */}
          <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
          {/* Fallback route */}
          <Route path="*" element={<h2>404: Page Not Found</h2>} />
        </Routes>
      </main>
    </div>
  )
}

export default App