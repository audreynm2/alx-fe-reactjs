import useRecipeStore from './recipeStore';
import { Link } from 'react-router-dom';

const FavoritesList = () => {
  // Finds the full recipe objects for all favorited IDs
  const favoriteRecipes = useRecipeStore(state => {
    return state.favorites.map(id =>
      state.recipes.find(recipe => recipe.id === id)
    ).filter(recipe => recipe); 
  });

  return (
    <div style={{ marginTop: '40px', padding: '20px', border: '1px solid #ff9800', borderRadius: '8px', backgroundColor: '#fffbe6' }}>
      <h2 style={{ color: '#ff9800', borderBottom: '2px solid #ff9800', paddingBottom: '10px' }}>⭐ My Favorites ({favoriteRecipes.length})</h2>
      
      {favoriteRecipes.length === 0 ? (
        <p style={{ color: '#777' }}>You haven't favorited any recipes yet!</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {favoriteRecipes.map(recipe => (
            <Link key={recipe.id} to={`/recipes/${recipe.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div style={{ padding: '10px', backgroundColor: '#fff', border: '1px solid #ffcc80', borderRadius: '4px', cursor: 'pointer' }}>
                <h4 style={{ margin: 0, color: '#ff9800' }}>{recipe.title}</h4>
                <p style={{ margin: 0, fontSize: '0.8em', color: '#6c757d' }}>{recipe.description.substring(0, 50)}...</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesList;