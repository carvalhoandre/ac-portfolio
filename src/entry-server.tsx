import { renderToString } from "react-dom/server";
import App from "./App";
import { getPageMetadata, resolveRoute, staticPaths } from "./content/routes";

export { staticPaths };

export function renderPath(pathname: string) {
  const resolved = resolveRoute(pathname);
  return {
    html: renderToString(
      <App locale={resolved.locale} route={resolved.route} />,
    ),
    locale: resolved.locale,
    metadata: getPageMetadata(resolved),
  };
}
