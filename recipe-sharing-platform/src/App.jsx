import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import RecipeDetail from './components/RecipeDetail'; 
import AddRecipeForm from './components/AddRecipeForm'; // Task 3 Component

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-md">
          <div className="container mx-auto p-4 flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold text-blue-700">RecipeShare</Link>
            <nav>
              <Link to="/add" className="text-gray-600 hover:text-blue-700 font-medium">Add Recipe</Link>
            </nav>
          </div>
        </header>
        
        <main className="py-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/recipe/:id" element={<RecipeDetail />} />
            <Route path="/add" element={<AddRecipeForm />} /> {/* Task 3 Route */}
            <Route path="*" element={<h1 className="text-center text-red-500">404 Not Found</h1>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
