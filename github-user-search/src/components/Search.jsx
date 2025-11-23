// START of new src/components/Search.jsx content
import React, { useState, useCallback } from 'react';
// Highlighted Change: Import the new searchUsers function
import { searchUsers } from '../services/githubService'; 

// Component to display a single search result item (Redesigned for list view)
const UserListItem = ({ user }) => (
  <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm flex items-center space-x-4 transition duration-200 hover:shadow-md">
    <img
      className="w-16 h-16 rounded-full object-cover"
      src={user.avatar_url}
      alt={`${user.login}'s avatar`}
    />
    <div className="flex-grow">
      <p className="text-lg font-semibold text-gray-900">
        {user.login}
      </p>
      <p className="text-gray-500 text-sm">
        Type: {user.type}
      </p>
    </div>
    <a
      href={user.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-150"
    >
      View Profile
    </a>
  </div>
);

function Search() {
  // Highlighted Change: Added states for location and minRepos
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  
  // Highlighted Change: userData is now an array (userResults)
  const [userResults, setUserResults] = useState([]);
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalCount, setTotalCount] = useState(0); // Added for total count reference

  const handleSearch = useCallback(async (e) => {
    e.preventDefault();

    // Reset states before new search
    setLoading(true);
    setError(null);
    // Highlighted Change: Resetting array and count
    setUserResults([]);
    setTotalCount(0);

    // Highlighted Change: Check if ANY criteria is entered
    if (!username.trim() && !location.trim() && !minRepos) {
      setError('Please enter at least a username, location, or minimum repository count.');
      setLoading(false);
      return;
    }

    try {
      // Highlighted Change: Call searchUsers with all filter parameters
      const data = await searchUsers(username, location, parseInt(minRepos) || 0);
      
      setUserResults(data.items);
      setTotalCount(data.total_count);

      if (data.items.length === 0) {
        setError('No users found matching the criteria.');
      }

    } catch (err) {
      let errorMessage = "Failed to perform search. Check network or rate limits.";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  }, [username, location, minRepos]);


  // --- Conditional Rendering for Results ---
  
  let resultsContent;

  if (loading) {
    resultsContent = (
      <p className="text-center text-blue-500 font-medium p-6">
        Loading...
      </p>
    );
  } else if (error) {
    resultsContent = (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
        <strong className="font-bold">Error: </strong>
        <span className="block sm:inline">{error}</span>
      </div>
    );
  } else if (userResults.length > 0) {
    // Highlighted Change: Rendering a list of UserListItem components
    resultsContent = (
      <div className="w-full">
         <h3 className="text-lg font-bold text-gray-700 mb-4">
            Found {totalCount} Users (Showing first {userResults.length})
         </h3>
         <div className="space-y-4">
            {userResults.map((user) => (
                <UserListItem key={user.id} user={user} />
            ))}
         </div>
         {totalCount > userResults.length && (
             <p className="mt-4 text-center text-sm text-gray-500">
                GitHub Search API limits results (max 1000).
             </p>
         )}
      </div>
    );
  } else if (!loading && !error && (username.trim() || location.trim() || minRepos.trim())) {
       resultsContent = (
        <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative">
            No results found. Try adjusting your search criteria.
        </div>
       );
  }


  return (
    <div className="flex flex-col items-center">
      <form onSubmit={handleSearch} className="w-full bg-white rounded-xl shadow-2xl p-6 space-y-4">
        
        <h2 className="text-xl font-bold text-gray-800 border-b pb-2 mb-4">Advanced User Search</h2>
        
        {/* Highlighted Addition: New layout for advanced inputs */}
        <div className="flex flex-col space-y-3 md:flex-row md:space-x-3 md:space-y-0">
            {/* 1. Username/Keyword Field */}
            <input
              type="text"
              placeholder="Username/Keyword (required)"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none"
            />

            {/* 2. Location Field - Highlighted Addition */}
            <input
              type="text"
              placeholder="Location (e.g., Ghana, London)"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none"
            />

            {/* 3. Min Repos Field - Highlighted Addition */}
            <input
              type="number"
              placeholder="Min Repositories"
              value={minRepos}
              onChange={(e) => setMinRepos(e.target.value)}
              min="0"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
        </div>
        
        <div className="w-full flex justify-center pt-2">
            <button
                type="submit"
                disabled={loading}
                className="w-full md:w-1/3 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-150 disabled:bg-green-300 shadow-md"
            >
                {loading ? 'Searching...' : 'Search GitHub'}
            </button>
        </div>
      </form>

      {/* Display search results, loading, or error */}
      <div className="w-full mt-8">
         {resultsContent}
      </div>
    </div>
  );
}

export default Search;
// END of new src/components/Search.jsx content