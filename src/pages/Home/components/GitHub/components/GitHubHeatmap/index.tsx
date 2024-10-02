import GitHubCalendar from "react-github-calendar";

import IComponent from "@/@types";

const GitHubHeatmap: IComponent = ({ testId = "github-heatmap" }) => {
  return (
    <div data-testid={testId}>
      <h3>GitHub Contributions</h3>

      <GitHubCalendar username="carvalhoandre" />
    </div>
  );
};

export { GitHubHeatmap };
