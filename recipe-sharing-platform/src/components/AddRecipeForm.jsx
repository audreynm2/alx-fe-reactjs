import { useState } from 'react';

const AddRecipeForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    ingredients: '',
    instructions: '',
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  // Handles state updates for all input fields
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear validation error on change
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
    setSuccessMessage(''); // Clear success message
  };

  // Implement Form Validation (Step 2)
  const validate = () => {
    const newErrors = {};
    if (!formData.title.trim()) {
      newErrors.title = 'Recipe Title is required.';
    }
    if (!formData.ingredients.trim()) {
      newErrors.ingredients = 'Ingredients list is required.';
    }
    if (!formData.instructions.trim()) {
      newErrors.instructions = 'Preparation Steps are required.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Simulate form submission success
      console.log('Recipe Submitted:', formData);
      setSuccessMessage('Recipe successfully added! (Simulated)');
      setFormData({ title: '', ingredients: '', instructions: '' }); // Clear form
    }
  };

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">
        Share Your Recipe 📝
      </h2>

      {successMessage && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6" role="alert">
          <strong className="font-bold">Success!</strong>
          <span className="block sm:inline"> {successMessage}</span>
        </div>
      )}

      {/* Responsive Form Layout (Step 3) */}
      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-white p-8 shadow-lg rounded-xl">
        
        {/* Title Field */}
        <div className="mb-6">
          <label htmlFor="title" className="block text-lg font-medium text-gray-700 mb-2">
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className={`w-full p-3 border ${errors.title ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150`}
            placeholder="e.g., Spicy Thai Green Curry"
            required
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
        </div>

        {/* Ingredients Textarea */}
        <div className="mb-6">
          <label htmlFor="ingredients" className="block text-lg font-medium text-gray-700 mb-2">
            Ingredients (List each item on a new line)
          </label>
          <textarea
            id="ingredients"
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            rows="6"
            className={`w-full p-3 border ${errors.ingredients ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-blue-500 focus:border-blue-500 resize-none transition duration-150`}
            placeholder="e.g., 2 Chicken Breasts\n1 can Coconut Milk\n1 tbsp Green Curry Paste"
            required
          ></textarea>
          {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
        </div>

        {/* Instructions Textarea */}
        <div className="mb-8">
          <label htmlFor="instructions" className="block text-lg font-medium text-gray-700 mb-2">
            Preparation Steps (Explain the process)
          </label>
          <textarea
            id="instructions"
            name="instructions"
            value={formData.instructions}
            onChange={handleChange}
            rows="8"
            className={`w-full p-3 border ${errors.instructions ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-blue-500 focus:border-blue-500 resize-none transition duration-150`}
            placeholder="Step 1: Slice the chicken. Step 2: Sauté the curry paste..."
            required
          ></textarea>
          {errors.instructions && <p className="text-red-500 text-sm mt-1">{errors.instructions}</p>}
        </div>
        
        {/* Submit Button (Responsive Styling) */}
        <button
          type="submit"
          className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white font-semibold text-lg rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
