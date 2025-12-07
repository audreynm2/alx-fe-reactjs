import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import recipeData from '../data.json';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setRecipes(recipeData);
    setLoading(false);
  }, []);

  if (loading) {
    return <div className="text-center p-8 text-xl font-semibold">Loading recipes...</div>;
  }

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">
        Featured Recipes 🍲
      </h2>
      
      {/* FIX: Updated the grid to include md:grid-cols-2 for explicit medium-screen support */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipes.map((recipe) => (
          
          <Link 
            key={recipe.id} 
            to={`/recipe/${recipe.id}`} 
            className="group block"
          >
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition duration-300 ease-in-out transform hover:shadow-xl hover:scale-[1.02]">
              <img 
                src={recipe.image} 
                alt={recipe.title} 
                className="w-full h-48 object-cover object-center" 
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition duration-300 mb-2">
                  {recipe.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {recipe.summary}
                </p>
                <span className="text-blue-500 font-medium group-hover:underline">
                  View Recipe
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
