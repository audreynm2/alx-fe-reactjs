import React from 'react';
import useRecipeStore from './recipeStore';
import { Link } from 'react-router-dom';

const RecommendationsList = () => {
  const recommendations = useRecipeStore(state => state.recommendations);
  const generateRecommendations = useRecipeStore(state => state.generateRecommendations);
  
  // Generates recommendations on load
  React.useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]); 

  return (
    <div style={{ marginTop: '20px', padding: '20px', border: '1px solid #17a2b8', borderRadius: '8px', backgroundColor: '#e8f8f9' }}>
      <h2 style={{ color: '#17a2b8', borderBottom: '2px solid #17a2b8', paddingBottom: '10px' }}>💡 Personalized Recommendations</h2>
      
      {recommendations.length === 0 ? (
        <p style={{ color: '#777' }}>No recommendations available right now. Try favoriting a few recipes!</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {recommendations.map(recipe => (
            <Link key={recipe.id} to={`/recipes/${recipe.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div style={{ padding: '10px', backgroundColor: '#fff', border: '1px solid #81d4fa', borderRadius: '4px', cursor: 'pointer' }}>
                <h4 style={{ margin: 0, color: '#17a2b8' }}>{recipe.title}</h4>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecommendationsList;