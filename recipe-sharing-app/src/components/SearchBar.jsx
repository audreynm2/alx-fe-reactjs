import React from 'react';
import useRecipeStore from './recipeStore';

const SearchBar = () => {
  // Select the setSearchTerm action from the store
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm);
  // Select the current searchTerm for controlled input 
  const searchTerm = useRecipeStore(state => state.searchTerm); 

  const handleChange = (e) => {
    // Dispatch action to update the search term in the store and trigger filtering
    setSearchTerm(e.target.value);
  };

  return (
    <div style={{ margin: '20px 0', padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
      <input
        type="text"
        placeholder="Search recipes by name or description..."
        value={searchTerm}
        onChange={handleChange}
        style={{
          width: '100%',
          padding: '10px 15px',
          fontSize: '1em',
          border: '2px solid #ced4da',
          borderRadius: '5px',
          outline: 'none',
          transition: 'border-color 0.3s'
        }}
        aria-label="Search recipes"
      />
    </div>
  );
};

export default SearchBar;