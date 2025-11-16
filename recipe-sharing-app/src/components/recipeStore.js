import { create } from 'zustand'

// We use default initial recipes for testing functionality
const initialRecipes = [
  { id: 1, title: 'Classic Beef Stew', description: 'A hearty and comforting stew with root vegetables.' },
  { id: 2, title: 'Simple Pasta Aglio e Olio', description: 'Garlic, olive oil, and a touch of chili flakes.' }
];

const useRecipeStore = create(set => ({
  // Initial state
  recipes: initialRecipes,

  // State actions
  addRecipe: (newRecipe) => set(state => ({ 
    recipes: [...state.recipes, newRecipe] 
  })),

  setRecipes: (recipes) => set({ recipes })
}));

export default useRecipeStore; // Export as default