# 甲子園町自治会 ウェブサイト プロジェクト

## プロジェクト概要

甲子園町自治会の公式ウェブサイト。
Eleventy + Tailwind CSS CDN で構築。GitHub push → Vercel（確認用）、本番はロリポップ予定。

## 技術スタック

- ホスティング：Vercel（確認用）／ロリポップ（本番予定）
- デプロイ：GitHub push → 自動デプロイ
- コンテンツ管理：GitHub web UI + Claude（AI補助）
- SSG：Eleventy（@11ty/eleventy v3）
- CSS：Tailwind CSS CDN
- 会館予約：Googleフォーム（埋め込み済み）
- お問い合わせ：Googleフォーム（設定予定）

## フォルダ構成

```
koshiencho-jichikai/
├── CLAUDE.md
├── docs/
│   └── 要件定義.md
├── src/
│   ├── _includes/        ← レイアウト・パーツ
│   ├── content/
│   │   ├── news/         ← お知らせ（.md）
│   │   ├── events/       ← イベント（.md）
│   │   └── activities/   ← 活動報告（.md）
│   └── *.njk             ← 各ページ
├── assets/
│   └── images/           ← 画像ファイル
├── .eleventy.js
└── vercel.json
```

## ページ構成

| ページ | ファイル |
|---|---|
| トップ | src/index.njk |
| お知らせ | src/news/news.njk |
| イベント | src/events.njk |
| 活動報告 | src/activities/activities.njk |
| 月見里会館 予約 | src/reserve.njk |
| 自治会について | src/about.njk |
| お問い合わせ | src/contact.njk |

## 確認なしに実行してよいこと

- ファイルの読み取り・分析
- コードの編集・作成
- git add / commit / push
- npm run dev / npm run build

## 実装ルール

- コメントはロジックが自明でない場合のみ
- 動くものを先に作り、後で整える
- コミットメッセージは日本語でOK
