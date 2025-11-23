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