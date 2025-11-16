import useRecipeStore from './recipeStore';
    import { useNavigate } from 'react-router-dom';

    const DeleteRecipeButton = ({ recipeId }) => {
      // Select the delete action from the store
      const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
      // Hook to navigate programmatically
      const navigate = useNavigate();

      const handleDelete = () => {
        // Use a custom modal or simple window confirm for this action
        if (window.confirm("Are you sure you want to delete this recipe?")) {
          deleteRecipe(recipeId);
          // After deletion, navigate back to the home page (recipe list)
          navigate('/');
        }
      };

      return (
        <button 
          onClick={handleDelete} 
          style={{ 
            backgroundColor: '#dc3545', 
            color: 'white', 
            border: 'none', 
            padding: '10px 15px', 
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Delete Recipe
        </button>
      );
    };

    export default DeleteRecipeButton;