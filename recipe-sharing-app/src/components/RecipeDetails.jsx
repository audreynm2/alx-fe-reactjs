import useRecipeStore from './recipeStore';
import { useParams, Link } from 'react-router-dom';
import { useState, useCallback } from 'react';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { recipeId } = useParams();
  const id = parseInt(recipeId, 10);
  
  const [isEditing, setIsEditing] = useState(false);

  // Select recipe, favorite status, and favorite actions
  const { recipe, isFavorite, addFavorite, removeFavorite } = useRecipeStore(
    useCallback(state => ({
      recipe: state.recipes.find(r => r.id === id),
      isFavorite: state.favorites.includes(id),
      addFavorite: state.addFavorite,
      removeFavorite: state.removeFavorite,
    }), [id])
  );

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(id);
    } else {
      addFavorite(id);
    }
  };

  if (!recipe) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h2>Recipe not found 😔</h2>
        <Link to="/" style={{ color: '#007bff', textDecoration: 'none' }}>Go back to the Recipe List</Link>
      </div>
    );
  }

  if (isEditing) {
    return <EditRecipeForm recipe={recipe} onEditComplete={() => setIsEditing(false)} />;
  }

  return (
    <div style={{ padding: '20px', border: '2px solid #007bff', maxWidth: '800px', margin: '20px auto', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
      <Link to="/" style={{ display: 'inline-block', marginBottom: '20px', color: '#007bff', textDecoration: 'none' }}>← Back to Recipe List</Link>
      
      <h1 style={{ color: '#343a40' }}>{recipe.title}</h1>
      <p style={{ color: '#6c757d', fontSize: '1.1em', whiteSpace: 'pre-wrap' }}>{recipe.description}</p>
      
      <div style={{ display: 'flex', gap: '15px', marginTop: '30px', alignItems: 'center' }}>
        {/* Favorite Toggle Button */}
        <button 
          onClick={toggleFavorite} 
          style={{ 
            backgroundColor: isFavorite ? '#ffc107' : '#f0f0f0', 
            color: isFavorite ? '#fff' : '#343a40', 
            border: '1px solid #ffc107',
            padding: '10px 15px', 
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: 'bold',
            transition: 'background-color 0.3s'
          }}
        >
          {isFavorite ? '⭐ Favorited' : '☆ Add to Favorites'}
        </button>

        <button 
          onClick={() => setIsEditing(true)} 
          style={{ 
            backgroundColor: '#ffc107', 
            color: '#343a40', 
            border: 'none', 
            padding: '10px 15px', 
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Edit Recipe
        </button>
        <DeleteRecipeButton recipeId={recipe.id} />
      </div>
    </div>
  );
};

export default RecipeDetails;