import { create } from 'zustand'

const initialRecipes = [
  { id: 1, title: 'Classic Beef Stew', description: 'A hearty and comforting stew with root vegetables.' },
  { id: 2, title: 'Simple Pasta Aglio e Olio', description: 'Garlic, olive oil, and a touch of chili flakes.' },
  { id: 3, title: 'Spicy Chicken Curry', description: 'A creamy and spicy Indian-style chicken curry.' },
  { id: 4, title: 'Quick Tuna Salad', description: 'A healthy, protein-packed salad for a light lunch.' }
];

const useRecipeStore = create((set, get) => ({
  // --- CORE STATE ---
  recipes: initialRecipes,
  searchTerm: '',
  filteredRecipes: initialRecipes, 
  
  // --- NEW STATE FOR TASK 3 ---
  favorites: [1], 
  recommendations: [], 

  // --- ACTIONS ---

  // Search/Filter Actions (from Task 2)
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes(); 
  },
  filterRecipes: () => set(state => {
    const term = state.searchTerm.toLowerCase();
    const filtered = state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(term) ||
      recipe.description.toLowerCase().includes(term)
    );
    return { filteredRecipes: filtered };
  }),

  // CRUD Actions 
  addRecipe: (newRecipe) => set(state => { 
    const newRecipes = [...state.recipes, newRecipe];
    get().filterRecipes(); 
    return { recipes: newRecipes };
  }),
  deleteRecipe: (recipeId) => set(state => {
    const newRecipes = state.recipes.filter(recipe => recipe.id !== recipeId);
    const newFavorites = state.favorites.filter(id => id !== recipeId);
    get().filterRecipes();
    return { recipes: newRecipes, favorites: newFavorites };
  }),
  updateRecipe: (updatedRecipe) => set(state => {
    const newRecipes = state.recipes.map(recipe => 
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    );
    get().filterRecipes();
    return { recipes: newRecipes };
  }),
  setRecipes: (recipes) => set(state => {
    set({ recipes });
    get().filterRecipes();
  }),

  // --- NEW ACTIONS FOR FAVORITES ---
  addFavorite: (recipeId) => set(state => {
    if (!state.favorites.includes(recipeId)) {
      return { favorites: [...state.favorites, recipeId] };
    }
    return {};
  }),
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),

  // --- NEW ACTION FOR RECOMMENDATIONS ---
  generateRecommendations: () => set(state => {
    // Mock implementation: recommend non-favorited recipes randomly
    const nonFavorites = state.recipes.filter(recipe => !state.favorites.includes(recipe.id));
    const shuffled = nonFavorites.sort(() => 0.5 - Math.random());
    // Get up to two random recommendations
    const recommended = shuffled.slice(0, 2); 
    
    return { recommendations: recommended };
  }),
}));

export default useRecipeStore;