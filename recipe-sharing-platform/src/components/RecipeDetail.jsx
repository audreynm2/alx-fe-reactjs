import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import recipeData from '../data.json';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find the recipe matching the ID from the URL parameter
    const foundRecipe = recipeData.find((r) => r.id === Number(id));
    setRecipe(foundRecipe || null);
    setLoading(false);
  }, [id]);

  if (loading) {
    return <div className="text-center p-8 text-xl font-semibold">Loading recipe details...</div>;
  }

  if (!recipe) {
    return (
      <div className="text-center p-8">
        <h2 className="text-3xl font-bold text-red-600 mb-4">Recipe Not Found 😔</h2>
        <Link to="/" className="text-blue-500 hover:underline">Go back to Home</Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <div className="bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="relative">
          {/* Recipe Image with Title Overlay */}
          <img 
            src={recipe.image} 
            alt={recipe.title} 
            className="w-full h-72 object-cover object-center filter brightness-90"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end p-6">
            <h1 className="text-5xl font-extrabold text-white leading-tight">
              {recipe.title}
            </h1>
          </div>
        </div>
        
        <div className="p-6 md:p-10">
          <p className="text-xl text-gray-700 italic mb-8 border-l-4 border-blue-500 pl-4">
            {recipe.summary}
          </p>

          {/* Ingredients and Instructions Layout (Responsive Grid) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold text-blue-700 mb-4 border-b pb-2">
                Ingredients 🍎
              </h2>
              <ul className="space-y-3 text-lg text-gray-800 list-disc list-inside">
                {recipe.ingredients.map((item, index) => (
                  <li key={index} className="pl-1">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-blue-700 mb-4 border-b pb-2">
                Preparation Steps 📝
              </h2>
              <ol className="space-y-6 text-lg text-gray-800 list-decimal list-inside">
                {recipe.instructions.map((step, index) => (
                  <li key={index} className="pl-2">
                    <p className="font-semibold text-gray-900">Step {index + 1}:</p>
                    <p className="text-gray-700 mt-1">{step}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
          
          <div className="mt-10 pt-6 border-t">
            <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition duration-150">
              &larr; Back to all recipes
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
# 2. Create the RecipeDetail Component (Steps 2 & 3)
cat << EOF > src/components/RecipeDetail.jsx
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import recipeData from '../data.json';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find the recipe matching the ID from the URL parameter
    const foundRecipe = recipeData.find((r) => r.id === Number(id));
    setRecipe(foundRecipe || null);
    setLoading(false);
  }, [id]);

  if (loading) {
    return <div className="text-center p-8 text-xl font-semibold">Loading recipe details...</div>;
  }

  if (!recipe) {
    return (
      <div className="text-center p-8">
        <h2 className="text-3xl font-bold text-red-600 mb-4">Recipe Not Found 😔</h2>
        <Link to="/" className="text-blue-500 hover:underline">Go back to Home</Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <div className="bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="relative">
          {/* Recipe Image with Title Overlay */}
          <img 
            src={recipe.image} 
            alt={recipe.title} 
            className="w-full h-72 object-cover object-center filter brightness-90"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end p-6">
            <h1 className="text-5xl font-extrabold text-white leading-tight">
              {recipe.title}
            </h1>
          </div>
        </div>
        
        <div className="p-6 md:p-10">
          <p className="text-xl text-gray-700 italic mb-8 border-l-4 border-blue-500 pl-4">
            {recipe.summary}
          </p>

          {/* Ingredients and Instructions Layout (Responsive Grid) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold text-blue-700 mb-4 border-b pb-2">
                Ingredients 🍎
              </h2>
              <ul className="space-y-3 text-lg text-gray-800 list-disc list-inside">
                {recipe.ingredients.map((item, index) => (
                  <li key={index} className="pl-1">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-blue-700 mb-4 border-b pb-2">
                Preparation Steps 📝
              </h2>
              <ol className="space-y-6 text-lg text-gray-800 list-decimal list-inside">
                {recipe.instructions.map((step, index) => (
                  <li key={index} className="pl-2">
                    <p className="font-semibold text-gray-900">Step {index + 1}:</p>
                    <p className="text-gray-700 mt-1">{step}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
          
          <div className="mt-10 pt-6 border-t">
            <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition duration-150">
              &larr; Back to all recipes
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
