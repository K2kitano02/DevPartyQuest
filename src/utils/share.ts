import type { Result } from "../types/diagnosis";

export function createShareText(result: Result): string {
  return `私の開発パーティーロールは「${result.typeName}」でした！

${result.catchCopy}

#DevPartyQuest`;
}

export function shareToX(result: Result): void {
  const shareText = createShareText(result);
  const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    shareText,
  )}`;

  window.open(shareUrl, "_blank");
}
