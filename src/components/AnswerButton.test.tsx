import { isValidElement, type ReactNode } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it, vi } from "vitest";

import AnswerButton from "./AnswerButton";

type TestElementProps = {
  children?: ReactNode;
  onClick?: () => void;
  type?: string;
};

describe("AnswerButton", () => {
  it("回答テキストをボタンとして表示する", () => {
    const html = renderToStaticMarkup(
      <AnswerButton text="画面がいい感じに整ったとき" onClick={() => {}} />,
    );

    expect(html).toContain("button");
    expect(html).toContain("画面がいい感じに整ったとき");
  });

  it("クリック時にonClickを呼ぶ", () => {
    const onClick = vi.fn();
    const button = AnswerButton({
      text: "難しい処理が思った通りに動いたとき",
      onClick,
    });

    if (!isValidElement<TestElementProps>(button)) {
      throw new Error("回答ボタンが見つかりませんでした");
    }

    expect(button.props.type).toBe("button");

    button.props.onClick?.();

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
