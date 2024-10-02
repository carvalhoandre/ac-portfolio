import axios from "axios";

const githubUsername = "carvalhoandre";
const GITHUB_API_URL = "https://api.github.com/users";

export const fetchGitHubProfile = async () => {
  try {
    const response = await axios.get(`${GITHUB_API_URL}/${githubUsername}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching GitHub profile:", error);
  }
};

export const fetchGitHubRepos = async () => {
  try {
    const response = await axios.get(
      `${GITHUB_API_URL}/${githubUsername}/repos`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching GitHub repos:", error);
  }
};

export const fetchRecentCommits = async (repo: string) => {
  try {
    const response = await axios.get(
      `${GITHUB_API_URL}/repos/${githubUsername}/${repo}/commits`,
      {
        params: {
          per_page: 5,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching GitHub repos:", error);
  }
};
