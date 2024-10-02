import { useEffect, useState } from "react";

import IComponent from "@/@types";

import { fetchGitHubRepos } from "@/services/api";

const PinnedRepos: IComponent = ({ testId = "pinned-repos" }) => {
  const [repos, setRepos] = useState<Array<any>>([]);
  const pinnedRepos = [
    "projeto_computacao_aplicada",
    "ac-countries",
    "ac-portfolio",
  ];

  useEffect(() => {
    const getReposData = async () => {
      const reposData = await fetchGitHubRepos();

      console.log("reposData", reposData);
      const pinnedData = reposData.filter((repo) =>
        pinnedRepos.includes(repo.name)
      );
      setRepos(pinnedData);
    };
    getReposData();
  }, []);

  return (
    <div className="pinned-repos" data-testid={testId}>
      <h3>Pinned Repositories</h3>

      {repos.map((repo) => (
        <div key={repo.id} className="repo-card">
          <h3>{repo.name}</h3>
          <p>{repo.description}</p>
        </div>
      ))}
    </div>
  );
};

export { PinnedRepos };
