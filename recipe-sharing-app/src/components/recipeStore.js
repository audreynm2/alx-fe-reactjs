import { create } from 'zustand'

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
      
      // New: Action to delete a recipe by ID
      deleteRecipe: (recipeId) => set(state => ({
        recipes: state.recipes.filter(recipe => recipe.id !== recipeId)
      })),

      // New: Action to update a recipe
      updateRecipe: (updatedRecipe) => set(state => ({
        recipes: state.recipes.map(recipe => 
          // Check if the IDs match, and if so, replace the old recipe object with the new one
          recipe.id === updatedRecipe.id ? updatedRecipe : recipe
        )
      })),
      
      setRecipes: (recipes) => set({ recipes })
    }));

    export default useRecipeStore;