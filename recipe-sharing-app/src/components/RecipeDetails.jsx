import useRecipeStore from './recipeStore';
    import { useParams, Link } from 'react-router-dom';
    import { useState } from 'react';
    // Import the new components
    import EditRecipeForm from './EditRecipeForm';
    import DeleteRecipeButton from './DeleteRecipeButton';

    const RecipeDetails = () => {
      // 1. Get the recipeId from the URL parameters
      const { recipeId } = useParams();
      const id = parseInt(recipeId, 10);
      
      // State to toggle between view mode and edit mode
      const [isEditing, setIsEditing] = useState(false);

      // 2. Select the specific recipe from the store
      const recipe = useRecipeStore(state =>
        state.recipes.find(r => r.id === id)
      );

      // Handle recipe not found case
      if (!recipe) {
        return (
          <div style={{ padding: '20px', textAlign: 'center' }}>
            <h2>Recipe not found 😔</h2>
            <Link to="/" style={{ color: '#007bff', textDecoration: 'none' }}>Go back to the Recipe List</Link>
          </div>
        );
      }

      // Render the Edit Form if isEditing is true
      if (isEditing) {
        return <EditRecipeForm recipe={recipe} onEditComplete={() => setIsEditing(false)} />;
      }

      // Render the Recipe Details View
      return (
        <div style={{ padding: '20px', border: '2px solid #007bff', maxWidth: '800px', margin: '20px auto', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
          <Link to="/" style={{ display: 'inline-block', marginBottom: '20px', color: '#007bff', textDecoration: 'none' }}>← Back to Recipe List</Link>
          
          <h1 style={{ color: '#343a40' }}>{recipe.title}</h1>
          <p style={{ color: '#6c757d', fontSize: '1.1em', whiteSpace: 'pre-wrap' }}>{recipe.description}</p>
          
          <div style={{ display: 'flex', gap: '15px', marginTop: '30px' }}>
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