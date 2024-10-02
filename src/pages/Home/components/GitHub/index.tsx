import IComponent from "@/@types";

import { PinnedRepos } from "./components/PinnedRepos";
import { GitHubHeatmap } from "./components/GitHubHeatmap";
import { GitHubRepos } from "./components/Repos";

import "./styles.css";

const GitHub: IComponent = ({ testId = "github" }) => {
  return (
    <div className="github-section" data-testid={testId}>
      <PinnedRepos />
      <GitHubRepos />
      <GitHubHeatmap />
    </div>
  );
};

export { GitHub };
