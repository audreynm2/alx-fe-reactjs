import axios from 'axios';

// Base URL for the GitHub API
const GITHUB_BASE_URL = 'https://api.github.com';

/**
 * Fetches detailed profile data for a specific GitHub user.
 * @param {string} username - The GitHub username to search for.
 * @returns {Promise<Object>} - The user data object.
 */
export const fetchUserData = async (username) => {
  if (!username) {
    throw new Error("Username cannot be empty.");
  }

  // The GitHub API endpoint for a specific user
  const url = `${GITHUB_BASE_URL}/users/${username}`;

  try {
    // Set up headers for authorization (optional but good practice for rate limits)
    const headers = {};
    const apiKey = import.meta.env.VITE_APP_GITHUB_API_KEY;

    if (apiKey) {
      // Note: GitHub recommends using the Authorization header with a Personal Access Token
      headers['Authorization'] = `token ${apiKey}`;
    }

    const response = await axios.get(url, { headers });

    // The API returns the user data directly in the response.data
    return response.data;
  } catch (error) {
    // Log the full error for debugging
    console.error("API Call Error:", error);

    // Check if the error is a 404 (Not Found)
    if (axios.isAxiosError(error) && error.response && error.response.status === 404) {
      throw new Error("User not found (404)");
    }

    // Re-throw other errors (like network, rate limit issues)
    throw new Error(error.message || "Failed to fetch user data.");
  }
};

// ----------------------------------------------------------------------
// Advanced Search Functionality (Task 2 Addition)
// ----------------------------------------------------------------------

/**
 * Searches for GitHub users based on a query string, including filters (location and repos).
 * @param {string} username - The base username term.
 * @param {string} location - Location filter string.
 * @param {number} minRepos - Minimum repository count filter.
 * @returns {Promise<Object>} - The search results object (includes 'items' array).
 */
export const searchUsers = async (username, location, minRepos) => {
  let query = username.trim();

  // Add location filter using GitHub Search syntax: "+location:VALUE"
  if (location && location.trim()) {
    query += `+location:${location.trim()}`;
  }

  // Add minimum repositories filter using GitHub Search syntax: "+repos:>=N"
  if (minRepos && minRepos > 0) {
    query += `+repos:>=${minRepos}`;
  }
  
  if (!query) {
     throw new Error("Search query cannot be empty.");
  }

  // GitHub Search API endpoint
  const url = `${GITHUB_BASE_URL}/search/users?q=${encodeURIComponent(query)}`;

  try {
    const headers = {};
    const apiKey = import.meta.env.VITE_APP_GITHUB_API_KEY;

    if (apiKey) {
      headers['Authorization'] = `token ${apiKey}`;
    }
    
    // The Search API returns a paginated object with 'items' (an array of users)
    const response = await axios.get(url, { headers });
    return response.data;
  } catch (error) {
    console.error("Advanced Search API Call Error:", error);
    // You might want to include 403 (Forbidden/Rate Limit) specific handling here
    throw new Error(error.message || "Failed to perform advanced user search.");
  }
};