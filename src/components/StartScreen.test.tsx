import { isValidElement, type ReactNode } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it, vi } from "vitest";

import StartScreen from "./StartScreen";

type TestElementProps = {
  children?: ReactNode;
  onClick?: () => void;
};

function findStartButton(node: ReactNode): ReactNode {
  if (!isValidElement<TestElementProps>(node)) {
    return null;
  }

  if (node.type === "button" && node.props.children === "診断を始める") {
    return node;
  }

  const children = node.props.children;

  if (Array.isArray(children)) {
    return children.map(findStartButton).find(Boolean) ?? null;
  }

  return findStartButton(children);
}

describe("StartScreen", () => {
  it("トップページに必要な文言を表示する", () => {
    const html = renderToStaticMarkup(<StartScreen onStart={() => {}} />);

    expect(html).toContain("Dev Party Quest");
    expect(html).toContain("あなたの開発パーティーロール診断");
    expect(html).toContain("8つの質問に答えて");
    expect(html).toContain("診断を始める");
  });

  it("診断開始ボタンにonStartを渡す", () => {
    const onStart = vi.fn();
    const screen = StartScreen({ onStart });
    const button = findStartButton(screen);

    if (!isValidElement<TestElementProps>(button)) {
      throw new Error("診断開始ボタンが見つかりませんでした");
    }

    button.props.onClick?.();

    expect(onStart).toHaveBeenCalledTimes(1);
  });
});
