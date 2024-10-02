import { useEffect, useState } from "react";

import IComponent from "@/@types";

import { fetchRecentCommits } from "@/services/api";

const GitHubHeatmap: IComponent = ({ testId = "github-heatmap" }) => {
  const [commits, setCommits] = useState<Array<any>>([]);

  useEffect(() => {
    const getCommitsData = async () => {
      const commitsData = await fetchRecentCommits("ac-portfolio");
      setCommits(commitsData);
    };
    getCommitsData();
  }, []);

  return (
    <div className="recent-commits" data-testid={testId}>
      <h3>Recent Commits</h3>

      <ul>
        {commits.slice(0, 5).map((commit: any) => (
          <li key={commit.sha}>
            <p>{commit.commit.message}</p>
            <a href={commit.html_url} target="_blank" rel="noopener noreferrer">
              View Commit
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { GitHubHeatmap };
