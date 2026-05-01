import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import ProgressBar from "./ProgressBar";

describe("ProgressBar", () => {
  it("現在の質問番号をcurrentQuestionIndex + 1で表示する", () => {
    const html = renderToStaticMarkup(
      <ProgressBar currentQuestionIndex={0} totalQuestions={8} />,
    );

    expect(html).toContain("1 / 8");
  });

  it("質問の進捗率をバー幅に反映する", () => {
    const html = renderToStaticMarkup(
      <ProgressBar currentQuestionIndex={3} totalQuestions={8} />,
    );

    expect(html).toContain("4 / 8");
    expect(html).toContain("width:50%");
  });
});
