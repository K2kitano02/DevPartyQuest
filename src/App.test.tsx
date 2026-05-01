import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import App from "./App";

describe("App", () => {
  it("初期表示ではトップページを表示する", () => {
    const html = renderToStaticMarkup(<App />);

    expect(html).toContain("Dev Party Quest");
    expect(html).toContain("診断を始める");
  });
});
