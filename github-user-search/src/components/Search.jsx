import React, { useState, useCallback } from 'react';
// Highlighted Change: Use fetchUserData for single user
import { fetchUserData } from '../services/githubService';

// Component to display user card
const UserCard = ({ user }) => (
  <div className="p-6 bg-white rounded-xl shadow-lg flex flex-col md:flex-row items-center space-x-6 w-full mt-6 transition duration-300 hover:shadow-2xl">
    <img
      className="w-24 h-24 rounded-full object-cover ring-4 ring-blue-400"
      src={user.avatar_url}
      alt={`${user.login}'s avatar`}
    />
    <div className="text-center md:text-left mt-4 md:mt-0">
      <p className="text-xl font-semibold text-gray-900">{user.name || user.login}</p>
      <p className="text-blue-600 text-lg">@{user.login}</p>
      <p className="text-gray-500 mt-1">{user.bio || 'No bio provided.'}</p>
      <a
        href={user.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-block px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition"
      >
        View GitHub Profile
      </a>
    </div>
  </div>
);

function Search() {
  // State for the input field
  const [username, setUsername] = useState('');
  // State for single API response data
  const [userData, setUserData] = useState(null);
  // State for handling loading and error states
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = useCallback(async (e) => {
    e.preventDefault(); 

    // Reset states before new search
    setLoading(true);
    setError(null);
    setUserData(null);

    if (!username.trim()) {
      setError('Please enter a GitHub username.');
      setLoading(false);
      return;
    }

    try {
      // Highlighted Change: Call the single-user function
      const data = await fetchUserData(username.trim());
      setUserData(data); 
    } catch (err) {
      // Highlighted Change: Use the EXACT required error string
      let errorMessage = "Looks like we cant find the user"; 
      if (err.message && err.message.includes("rate limit")) {
        errorMessage = "Rate limit exceeded. Please try again later.";
      }
      setError(errorMessage);
    } finally {
      setLoading(false); 
    }
  }, [username]);


  // --- Conditional Rendering Logic ---
  
  let resultsContent;

  if (loading) {
    // Highlighted Requirement: Display "Loading..."
    resultsContent = (
      <p className="text-center text-blue-500 font-medium mt-4">
        Loading...
      </p>
    );
  } else if (error) {
    // Highlighted Requirement: Display the exact error message
    resultsContent = (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-4">
        <strong className="font-bold">Error: </strong>
        <span className="block sm:inline">{error}</span>
      </div>
    );
  } else if (userData) {
    resultsContent = <UserCard user={userData} />;
  }


  return (
    <div className="flex flex-col items-center">
      <form onSubmit={handleSearch} className="w-full flex space-x-2 p-1 bg-white rounded-lg shadow-md">
        <input
          type="text"
          placeholder="Enter GitHub username (e.g., octocat)"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="flex-grow p-3 border-none focus:ring-0 rounded-l-lg outline-none text-gray-700"
        />
        <button
          type="submit"
          disabled={loading}
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-r-lg hover:bg-blue-700 transition duration-150 disabled:bg-blue-300"
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>

      <div className="w-full flex justify-center">
         {resultsContent}
      </div>
    </div>
  );
}

export default Search;