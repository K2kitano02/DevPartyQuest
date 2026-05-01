import { afterEach, describe, expect, it, vi } from "vitest";

import { results } from "../data/results";
import { createShareText, shareToX } from "./share";

describe("share utils", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("診断結果から共有文を作成する", () => {
    expect(createShareText(results.productHero)).toBe(`私の開発パーティーロールは「プロダクト勇者」でした！

ユーザー価値を武器に、開発パーティーを前へ進める主人公タイプ

#DevPartyQuest`);
  });

  it("Xの投稿画面を共有文付きで別タブに開く", () => {
    const open = vi.fn();

    vi.stubGlobal("window", { open });

    shareToX(results.uiMage);

    const expectedShareText = createShareText(results.uiMage);
    const expectedShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      expectedShareText,
    )}`;

    expect(open).toHaveBeenCalledTimes(1);
    expect(open).toHaveBeenCalledWith(expectedShareUrl, "_blank");
  });
});
