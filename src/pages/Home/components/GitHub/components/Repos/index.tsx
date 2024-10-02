import { useEffect, useState } from "react";

import IComponent from "@/@types";
import { fetchGitHubRepos } from "@/services/api";

const GitHubRepos: IComponent = ({ testId = "github-profile" }) => {
  const [repos, setRepos] = useState<Array<any>>([]);

  useEffect(() => {
    const getReposData = async () => {
      const reposData = await fetchGitHubRepos();

      setRepos(reposData);
    };
    getReposData();
  }, []);

  if (!repos.length) return <div>Loading repos...</div>;

  return (
    <div className="github-repos" data-testid={testId}>
      {repos.map((repo) => (
        <div key={repo.id} className="repo-card">
          <h3>{repo.name}</h3>
          <p>{repo.description}</p>
          <p>Language: {repo.language}</p>
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
            View Repository
          </a>
        </div>
      ))}
    </div>
  );
};

export { GitHubRepos };
