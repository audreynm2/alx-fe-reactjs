import { create } from 'zustand'

// Use a unique ID generator (like Date.now()) for new recipes in the task.
// In a real app, use a proper ID generator like uuid.

const useRecipeStore = create(set => ({
  // Initial state
  recipes: [
    { id: 1, title: 'Classic Beef Stew', description: 'A hearty and comforting stew with root vegetables.' },
    { id: 2, title: 'Simple Pasta Aglio e Olio', description: 'Garlic, olive oil, and a touch of chili flakes.' }
  ],

  // State actions
  addRecipe: (newRecipe) => set(state => ({
    recipes: [...state.recipes, newRecipe]
  })),

  // setRecipes is included for potential initialization or data fetching, as per the task template.
  setRecipes: (recipes) => set({ recipes })
}));

export default useRecipeStore;