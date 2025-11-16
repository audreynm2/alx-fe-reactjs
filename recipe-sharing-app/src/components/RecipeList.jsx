import useRecipeStore from './recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  // We use the filteredRecipes array now
  const recipes = useRecipeStore(state => state.filteredRecipes);

  return (
    <div>
      <h2 style={{ marginBottom: '15px', borderBottom: '2px solid #eee', paddingBottom: '5px' }}>
        {recipes.length > 0 ? `Displaying ${recipes.length} Recipes` : 'Recipes'}
      </h2>
      
      {recipes.length === 0 ? (
        <p style={{ color: '#dc3545', padding: '10px', backgroundColor: '#f8d7da', border: '1px solid #f5c6cb', borderRadius: '5px' }}>
          No recipes found matching your search criteria.
        </p>
      ) : (
        recipes.map(recipe => (
          // Link to navigate to the details page
          <Link key={recipe.id} to={`/recipes/${recipe.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{ border: '1px solid #ccc', margin: '10px 0', padding: '15px', cursor: 'pointer', borderRadius: '5px', transition: 'box-shadow 0.3s' }}
                 onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 123, 255, 0.5)'}
                 onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}>
              <h3 style={{ margin: '0 0 5px 0', color: '#007bff' }}>{recipe.title}</h3>
              <p style={{ margin: 0, fontSize: '0.9em' }}>{recipe.description.substring(0, 80)}{recipe.description.length > 80 ? '...' : ''}</p>
              <small style={{ color: '#6c757d', marginTop: '5px', display: 'block' }}>Click for Details</small>
            </div>
          </Link>
        ))
      )}
    </div>
  );
};

export default RecipeList;