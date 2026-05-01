import { isValidElement, type ReactNode } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it, vi } from "vitest";

import { results } from "../data/results";
import ResultCard from "./ResultCard";

type TestElementProps = {
  children?: ReactNode;
  onClick?: () => void;
};

function findButton(node: ReactNode, text: string): ReactNode {
  if (!isValidElement<TestElementProps>(node)) {
    return null;
  }

  if (node.type === "button" && node.props.children === text) {
    return node;
  }

  const children = node.props.children;

  if (Array.isArray(children)) {
    return (
      children.map((child) => findButton(child, text)).find(Boolean) ?? null
    );
  }

  return findButton(children, text);
}

describe("ResultCard", () => {
  const result = results.productHero;

  it("診断結果の詳細情報を表示する", () => {
    const html = renderToStaticMarkup(
      <ResultCard result={result} onRestart={() => {}} onShare={() => {}} />,
    );

    expect(html).toContain(result.typeName);
    expect(html).toContain(result.jobName);
    expect(html).toContain(result.catchCopy);
    expect(html).toContain(result.description);
    result.strengths.forEach((strength) => {
      expect(html).toContain(strength);
    });
    expect(html).toContain(result.weakness);
    expect(html).toContain(result.teamRole);
    expect(html).toContain(result.compatibility.message);
  });

  it("相性の良いタイプを表示名に変換して表示する", () => {
    const html = renderToStaticMarkup(
      <ResultCard result={result} onRestart={() => {}} onShare={() => {}} />,
    );

    expect(html).toContain("設計参謀");
    expect(html).toContain("ロジック剣士");
  });

  it("もう一度診断とX共有の処理を呼び出せる", () => {
    const onRestart = vi.fn();
    const onShare = vi.fn();
    const card = ResultCard({ result, onRestart, onShare });
    const restartButton = findButton(card, "もう一度診断する");
    const shareButton = findButton(card, "Xで共有");

    if (!isValidElement<TestElementProps>(restartButton)) {
      throw new Error("もう一度診断するボタンが見つかりませんでした");
    }

    if (!isValidElement<TestElementProps>(shareButton)) {
      throw new Error("Xで共有ボタンが見つかりませんでした");
    }

    restartButton.props.onClick?.();
    shareButton.props.onClick?.();

    expect(onRestart).toHaveBeenCalledTimes(1);
    expect(onShare).toHaveBeenCalledTimes(1);
  });
});
