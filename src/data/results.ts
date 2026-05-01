import type { Result, RoleType } from "../types/diagnosis";

export const results: Record<RoleType, Result> = {
  productHero: {
    type: "productHero",
    typeName: "プロダクト勇者",
    jobName: "勇者",
    catchCopy: "ユーザー価値を武器に、開発パーティーを前へ進める主人公タイプ",
    description:
      "使う人の気持ちや、サービスの目的を考えながら開発できるタイプです。実装だけでなく「この機能は誰のためにあるのか？」という視点を大切にします。",
    strengths: [
      "ユーザー目線で考えられる",
      "目的から逆算して判断できる",
      "チームの方向性を前向きに整えられる",
    ],
    weakness:
      "理想の体験を考えるあまり、実装したいことが増えすぎることがあります。",
    teamRole:
      "チームが迷ったときに、サービスの目的やユーザー価値に立ち返らせてくれる存在です。",
    compatibility: {
      good: ["strategySage", "logicKnight"],
      message:
        "設計参謀が道筋を整理し、ロジック剣士が実装で形にしてくれると、あなたのアイデアが一気にプロダクトになります。",
    },
  },
  uiMage: {
    type: "uiMage",
    typeName: "UI魔法使い",
    jobName: "魔法使い",
    catchCopy: "画面に魔法をかけ、使いたくなる体験を生み出すタイプ",
    description:
      "見た目や操作感に敏感で、アプリの第一印象を良くするのが得意なタイプです。色、余白、配置、動きなどの細かい違いにも気づきやすいです。",
    strengths: [
      "画面の完成度を上げられる",
      "ユーザー体験を意識できる",
      "アプリの雰囲気づくりが得意",
    ],
    weakness:
      "見た目にこだわるほど、細部の調整に時間を使いすぎることがあります。",
    teamRole:
      "アプリを「ただ動くもの」から「触って楽しいもの」に近づけてくれる存在です。",
    compatibility: {
      good: ["productHero", "refactorBlacksmith"],
      message:
        "プロダクト勇者が体験の方向性を示し、改善鍛冶師が細部を磨くことで、UIの魅力がさらに引き立ちます。",
    },
  },
  logicKnight: {
    type: "logicKnight",
    typeName: "ロジック剣士",
    jobName: "剣士",
    catchCopy: "コードで道を切り開く、実装突破タイプ",
    description:
      "条件分岐、データ処理、状態管理など、アプリを動かすための処理に向き合えるタイプです。難しそうな実装も一つずつ分解して考えられます。",
    strengths: [
      "実装力で前に進められる",
      "論理的に考えられる",
      "複雑な処理を整理して組み立てられる",
    ],
    weakness:
      "処理に集中しすぎて、画面の見やすさや使いやすさが後回しになることがあります。",
    teamRole:
      "難しい実装や処理部分を支え、チームのアイデアを実際に動く形へ近づけてくれる存在です。",
    compatibility: {
      good: ["productHero", "bugHunter"],
      message:
        "プロダクト勇者が目的を示し、バグハンターが品質を守ってくれることで、安心して実装に集中できます。",
    },
  },
  bugHunter: {
    type: "bugHunter",
    typeName: "バグハンター",
    jobName: "狩人",
    catchCopy: "不具合の気配を見逃さない、品質を守る観察眼タイプ",
    description:
      "エラー文、違和感のある動き、想定外の操作などに気づきやすいタイプです。原因を探りながら、アプリの完成度を高めていけます。",
    strengths: [
      "バグや違和感に気づきやすい",
      "原因調査を粘り強く進められる",
      "リリース前の安心感を高められる",
    ],
    weakness:
      "細かい不具合が気になって、なかなか「完成！」と言い切れないことがあります。",
    teamRole:
      "チームが安心して前に進めるように、見落としがちな問題を発見してくれる存在です。",
    compatibility: {
      good: ["logicKnight", "refactorBlacksmith"],
      message:
        "ロジック剣士が実装を進め、改善鍛冶師が整えてくれることで、あなたの発見が品質アップに直結します。",
    },
  },
  strategySage: {
    type: "strategySage",
    typeName: "設計参謀",
    jobName: "軍師",
    catchCopy: "全体を見渡し、勝てる開発ルートを組み立てる作戦タイプ",
    description:
      "実装前に全体像を整理したり、データ構造やコンポーネント分割を考えたりするのが得意なタイプです。行き当たりばったりより、見通しを立てて進めたい傾向があります。",
    strengths: [
      "全体像を整理できる",
      "仕様や構造の抜け漏れに気づける",
      "後から困りにくい形を考えられる",
    ],
    weakness:
      "考える時間が長くなりすぎて、最初の一歩が遅くなることがあります。",
    teamRole:
      "開発の道筋を整理し、チームが迷わず進めるように支えてくれる存在です。",
    compatibility: {
      good: ["productHero", "speedNinja"],
      message:
        "プロダクト勇者が目的を示し、爆速忍者が素早く形にすることで、あなたの設計が実戦で活きます。",
    },
  },
  communicationPriest: {
    type: "communicationPriest",
    typeName: "コミュ力僧侶",
    jobName: "僧侶",
    catchCopy: "相談しやすい空気で、開発パーティーのHPを回復する支援タイプ",
    description:
      "質問、相談、共有を大切にできるタイプです。困っている人に気づいたり、チームの雰囲気をやわらかくしたりする力があります。",
    strengths: [
      "相談しやすい雰囲気を作れる",
      "情報共有を大切にできる",
      "チームの不安を和らげられる",
    ],
    weakness:
      "周りを気にかけるあまり、自分の作業を後回しにしてしまうことがあります。",
    teamRole:
      "メンバー同士をつなぎ、チーム全体が前向きに進める空気を作ってくれる存在です。",
    compatibility: {
      good: ["speedNinja", "strategySage"],
      message:
        "爆速忍者の勢いと設計参謀の整理力をつなぐことで、チーム全体が安心して前に進めます。",
    },
  },
  speedNinja: {
    type: "speedNinja",
    typeName: "爆速忍者",
    jobName: "忍者",
    catchCopy: "まず動かして流れを作る、初速最強の突破タイプ",
    description:
      "考えすぎるより、まず手を動かして形にするのが得意なタイプです。MVPを素早く作り、そこから改善していく進め方と相性が良いです。",
    strengths: [
      "初速が速い",
      "試作やたたき台作りが得意",
      "停滞した空気を動かせる",
    ],
    weakness:
      "スピード重視で進めるため、細かい設計や整理が後回しになることがあります。",
    teamRole:
      "「まず形にしてみよう」と開発を前に進め、チームに勢いを生み出してくれる存在です。",
    compatibility: {
      good: ["strategySage", "communicationPriest"],
      message:
        "設計参謀が道筋を整え、コミュ力僧侶がチームを支えることで、あなたのスピードがより活きます。",
    },
  },
  refactorBlacksmith: {
    type: "refactorBlacksmith",
    typeName: "改善鍛冶師",
    jobName: "鍛冶師",
    catchCopy: "動くものをさらに磨き上げる、完成度アップタイプ",
    description:
      "一度作ったものをより良くするのが得意なタイプです。コードの読みやすさ、UIの微調整、処理の整理など、細部を磨くことに力を発揮します。",
    strengths: [
      "完成度を上げられる",
      "コードやUIの違和感に気づける",
      "保守しやすい形に近づけられる",
    ],
    weakness:
      "改善したいポイントが見えすぎて、終わりどころに迷うことがあります。",
    teamRole:
      "完成したものをさらに使いやすく、読みやすく、育てやすい形に鍛え直してくれる存在です。",
    compatibility: {
      good: ["uiMage", "bugHunter"],
      message:
        "UI魔法使いの表現力とバグハンターの観察眼が合わさると、あなたの改善力でアプリの完成度が一気に高まります。",
    },
  },
};
