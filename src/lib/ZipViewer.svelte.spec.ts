import { describe, expect, it } from "vitest";
import { page } from "vitest/browser";
import { render } from "vitest-browser-svelte";

import ZipViewer from "./ZipViewer.svelte";

describe("ZipViewer", () => {
  it("should render ZIP viewer canvas element", async () => {
    render(ZipViewer, {
      url:
        "https://data.source.coop/harvard-lil/gov-data/collections/data_gov/baffin-bay-region-narwhal-research-version-1/v1.zip",
    });

    const zipViewerElement = page.getById("zip-viewer");
    await expect.element(zipViewerElement).toBeInTheDocument();
  });

  it("should render ZIP breadcrumbs element", async () => {
    render(ZipViewer, {
      url:
        "https://data.source.coop/harvard-lil/gov-data/collections/data_gov/baffin-bay-region-narwhal-research-version-1/v1.zip",
    });

    const breadcrumbsElement = page.getById("zip-breadcrumbs");
    await expect.element(breadcrumbsElement).toBeInTheDocument();
  });

  it("should render ZIP contents element", async () => {
    render(ZipViewer, {
      url:
        "https://data.source.coop/harvard-lil/gov-data/collections/data_gov/baffin-bay-region-narwhal-research-version-1/v1.zip",
    });

    const contentsElement = page.getById("zip-contents");
    await expect.element(contentsElement).toBeInTheDocument();
  });
});
