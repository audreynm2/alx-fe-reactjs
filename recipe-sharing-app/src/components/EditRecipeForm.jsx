import { useState } from 'react';
    import useRecipeStore from './recipeStore';
    import { useNavigate } from 'react-router-dom';

    // This component receives the current recipe object and a function to exit editing mode
    const EditRecipeForm = ({ recipe, onEditComplete }) => {
      const updateRecipe = useRecipeStore(state => state.updateRecipe);
      const [title, setTitle] = useState(recipe.title);
      const [description, setDescription] = useState(recipe.description);
      const navigate = useNavigate();

      const handleSubmit = (event) => {
        event.preventDefault();
        if (!title.trim() || !description.trim()) return;

        // Create the updated recipe object
        const updatedRecipe = { 
          id: recipe.id, 
          title: title.trim(), 
          description: description.trim() 
        };

        // Dispatch the update action to the Zustand store
        updateRecipe(updatedRecipe);
        
        // Exit editing mode, navigating to the details page (re-render)
        onEditComplete();
        navigate(`/recipes/${recipe.id}`); // Force a navigate to re-render the details view
      };

      return (
        <div style={{ margin: '20px 0' }}>
          <h3>Edit Recipe</h3>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px', padding: '20px', border: '1px solid #ffc107', borderRadius: '8px' }}>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              required
              style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
              aria-label="Edit Recipe Title"
            />
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
              required
              rows="4"
              style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
              aria-label="Edit Recipe Description"
            />
            <div style={{ display: 'flex', gap: '10px' }}>
              <button type="submit" style={{ backgroundColor: '#28a745', color: 'white', padding: '10px 15px', border: 'none', borderRadius: '5px', cursor: 'pointer', flexGrow: 1 }}>
                Save Changes
              </button>
              <button type="button" onClick={onEditComplete} style={{ backgroundColor: '#6c757d', color: 'white', padding: '10px 15px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      );
    };

    export default EditRecipeForm;