import { isValidElement, type ReactNode } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it, vi } from "vitest";

import { finalQuestOptions } from "../data/finalQuestOptions";
import type { RoleType } from "../types/diagnosis";
import FinalQuestCard from "./FinalQuestCard";

type TestElementProps = {
  children?: ReactNode;
  onClick?: () => void;
  text?: string;
};

function findButton(node: ReactNode, text: string): ReactNode {
  if (!isValidElement<TestElementProps>(node)) {
    return null;
  }

  if (node.props.text === text) {
    return node;
  }

  const children = node.props.children;

  if (children === text) {
    return node;
  }

  if (Array.isArray(children)) {
    return children.map((child) => findButton(child, text)).find(Boolean) ?? null;
  }

  return findButton(children, text);
}

describe("FinalQuestCard", () => {
  const tiedRoleTypes: RoleType[] = ["logicKnight", "bugHunter"];

  it("FINAL QUESTと同点タイプの選択肢だけを表示する", () => {
    const html = renderToStaticMarkup(
      <FinalQuestCard
        roleTypes={tiedRoleTypes}
        onBack={() => {}}
        onSelect={() => {}}
      />,
    );

    expect(html).toContain("FINAL QUEST");
    expect(html).toContain(finalQuestOptions.logicKnight);
    expect(html).toContain(finalQuestOptions.bugHunter);
    expect(html).not.toContain(finalQuestOptions.productHero);
    expect(html).not.toContain("ロジック剣士");
    expect(html).not.toContain("バグハンター");
  });

  it("3タイプ同点なら3つの選択肢を表示する", () => {
    const html = renderToStaticMarkup(
      <FinalQuestCard
        roleTypes={["productHero", "uiMage", "speedNinja"]}
        onBack={() => {}}
        onSelect={() => {}}
      />,
    );

    expect(html).toContain(finalQuestOptions.productHero);
    expect(html).toContain(finalQuestOptions.uiMage);
    expect(html).toContain(finalQuestOptions.speedNinja);
    expect(html).not.toContain(finalQuestOptions.logicKnight);
  });

  it("選択したタイプを親へ渡す", () => {
    const onSelect = vi.fn<(roleType: RoleType) => void>();
    const card = FinalQuestCard({
      roleTypes: tiedRoleTypes,
      onBack: () => {},
      onSelect,
    });
    const button = findButton(card, finalQuestOptions.bugHunter);

    if (!isValidElement<TestElementProps>(button)) {
      throw new Error("最終選択ボタンが見つかりませんでした");
    }

    button.props.onClick?.();

    expect(onSelect).toHaveBeenCalledWith("bugHunter");
  });

  it("前の質問に戻るボタン押下時に親へ通知する", () => {
    const onBack = vi.fn<() => void>();
    const card = FinalQuestCard({
      roleTypes: tiedRoleTypes,
      onBack,
      onSelect: () => {},
    });
    const backButton = findButton(card, "前の質問に戻る");

    if (!isValidElement<TestElementProps>(backButton)) {
      throw new Error("戻るボタンが見つかりませんでした");
    }

    backButton.props.onClick?.();

    expect(onBack).toHaveBeenCalledOnce();
  });
});
