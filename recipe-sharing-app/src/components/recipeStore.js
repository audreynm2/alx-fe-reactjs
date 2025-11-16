import { create } from 'zustand'

const initialRecipes = [
  { id: 1, title: 'Classic Beef Stew', description: 'A hearty and comforting stew with root vegetables.' },
  { id: 2, title: 'Simple Pasta Aglio e Olio', description: 'Garlic, olive oil, and a touch of chili flakes.' }
];

const useRecipeStore = create((set, get) => ({
  // --- STATE ---
  recipes: initialRecipes,
  
  // New State for Search and Filter
  searchTerm: '',
  filteredRecipes: initialRecipes, 
  
  // --- ACTIONS ---

  // CRUD Actions (from Task 1)
  addRecipe: (newRecipe) => set(state => { 
    const newRecipes = [...state.recipes, newRecipe];
    // Re-filter the list after adding a recipe
    return { 
      recipes: newRecipes,
      filteredRecipes: newRecipes.filter(recipe => 
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
        recipe.description.toLowerCase().includes(state.searchTerm.toLowerCase())
      ) 
    };
  }),
  deleteRecipe: (recipeId) => set(state => {
    const newRecipes = state.recipes.filter(recipe => recipe.id !== recipeId);
    // Re-filter the list after deletion
    return { 
      recipes: newRecipes,
      filteredRecipes: newRecipes.filter(recipe => 
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
        recipe.description.toLowerCase().includes(state.searchTerm.toLowerCase())
      )
    };
  }),
  updateRecipe: (updatedRecipe) => set(state => {
    const newRecipes = state.recipes.map(recipe => 
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    );
    // Re-filter the list after update
    return {
      recipes: newRecipes,
      filteredRecipes: newRecipes.filter(recipe => 
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
        recipe.description.toLowerCase().includes(state.searchTerm.toLowerCase())
      )
    };
  }),
  setRecipes: (recipes) => set(state => {
    set({ recipes });
    get().filterRecipes();
  }),

  // New Action: Set search term and filter
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes(); 
  },
  
  // New Action: Compute the filtered recipes list
  filterRecipes: () => set(state => {
    const term = state.searchTerm.toLowerCase();
    
    // Filter based on recipe title AND description
    const filtered = state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(term) ||
      recipe.description.toLowerCase().includes(term)
    );
    
    return { filteredRecipes: filtered };
  }),
}));

export default useRecipeStore;