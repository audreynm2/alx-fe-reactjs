import axios from 'axios';

const GITHUB_BASE_URL = 'https://api.github.com';

// --- KEEP YOUR EXISTING fetchUserData FUNCTION HERE ---

// Assuming your fetchUserData looks something like this:
/*
export const fetchUserData = async (username) => { ... };
*/


/**
 * Searches for GitHub users based on a query string, including filters.
 * @param {string} username - The base username term.
 * @param {string} location - Location filter string.
 * @param {number} minRepos - Minimum repository count filter.
 * @returns {Promise<Object>} - The search results object (includes 'items' array).
 */
export const searchUsers = async (username, location, minRepos) => {
  let query = username.trim();

  // Highlighted Addition: Location filter
  if (location && location.trim()) {
    query += `+location:${location.trim()}`;
  }

  // Highlighted Addition: Minimum Repos filter using GitHub search syntax
  if (minRepos && minRepos > 0) {
    query += `+repos:>=${minRepos}`;
  }
  
  if (!query) {
     throw new Error("Search query cannot be empty.");
  }

  // Highlighted Change: Endpoint switched to GitHub Search API
  const url = `${GITHUB_BASE_URL}/search/users?q=${encodeURIComponent(query)}`;

  try {
    const headers = {};
    const apiKey = import.meta.env.VITE_APP_GITHUB_API_KEY;

    if (apiKey) {
      headers['Authorization'] = `token ${apiKey}`;
    }
    
    // The Search API returns an object with 'items' (an array of users)
    const response = await axios.get(url, { headers });
    return response.data;
  } catch (error) {
    console.error("Advanced Search API Call Error:", error);
    throw new Error(error.message || "Failed to perform advanced user search.");
  }
};