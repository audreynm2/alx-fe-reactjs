import React from 'react'; 
import AddRecipeForm from './components/AddRecipeForm'
import RecipeList from './components/RecipeList'
import RecipeDetails from './components/RecipeDetails' 
import SearchBar from './components/SearchBar' // Import the new SearchBar
import { Routes, Route } from 'react-router-dom' 
import './App.css' 
import useRecipeStore from './components/recipeStore'; 

// Helper component to structure the home page content
const Home = () => {
  const filterRecipes = useRecipeStore(state => state.filterRecipes);

  // Call filter once on component mount to initialize filteredRecipes 
  React.useEffect(() => {
    filterRecipes();
  }, [filterRecipes]); 

  return (
    <>
      <SearchBar /> {/* Placed prominently here */}
      <AddRecipeForm />
      <hr style={{ width: '100%', borderTop: '1px solid #eee', margin: '20px 0' }} />
      <RecipeList />
    </>
  );
};

function App() {
  return (
    <div className="app-container" style={{ minHeight: '100vh', padding: '20px' }}>
      <header style={{ marginBottom: '30px', textAlign: 'center' }}>
        <h1 style={{ color: '#007bff' }}>Recipe Sharing Application 🍳</h1>
        <p style={{ color: '#6c757d' }}>Advanced State Management and Search with **Zustand**</p>
      </header>
      <main style={{ maxWidth: '900px', width: '100%', margin: '0 auto' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
          <Route path="*" element={<h2>404: Page Not Found</h2>} />
        </Routes>
      </main>
    </div>
  )
}

export default App