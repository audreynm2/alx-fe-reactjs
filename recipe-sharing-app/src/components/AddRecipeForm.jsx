import { useState } from 'react';
import useRecipeStore from '../recipeStore';

const AddRecipeForm = () => {
  // Select only the addRecipe action from the store
  const addRecipe = useRecipeStore(state => state.addRecipe);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title || !description) return; // Simple validation

    // Generate a simple unique ID for the new recipe
    addRecipe({ id: Date.now(), title, description });

    // Reset form
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px', margin: '20px 0' }}>
      <h2>Add New Recipe</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
        aria-label="Recipe Title"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
        aria-label="Recipe Description"
      />
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm;