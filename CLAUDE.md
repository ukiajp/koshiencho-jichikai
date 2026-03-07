# 甲子園町自治会 ウェブサイト プロジェクト

## プロジェクト概要

甲子園町自治会の公式ウェブサイト。
Netlify + Decap CMS + HTML/CSS（Tailwind CSS）で構築。

## 技術スタック

- ホスティング：Netlify（無料枠）
- CMS：Decap CMS + Netlify Identity
- バックアップ：GitHub（自動連携）
- HTML / CSS：Tailwind CSS（CDN読み込み）
- 会館予約：Coubic 埋め込み
- お問い合わせ：Googleフォーム + GAS + LINE Messaging API

## フォルダ構成

```
koshiencho-jichikai/
├── CLAUDE.md             ← このファイル
├── docs/
│   └── 要件定義.md       ← 要件定義書（Obsidianからコピー）
├── admin/
│   └── config.yml        ← Decap CMS 設定
├── content/
│   ├── news/             ← お知らせ（Markdownファイル）
│   ├── events/           ← イベント（Markdownファイル）
│   └── activities/       ← 活動報告（Markdownファイル）
├── assets/
│   └── images/           ← 画像ファイル
└── index.html            ← トップページ
```

## ページ構成

| ページ | ファイル |
|---|---|
| トップ | index.html |
| お知らせ | news.html |
| イベント一覧 | events.html |
| 活動報告 | activities.html |
| 月見里会館 予約 | reserve.html |
| 自治会について | about.html |
| お問い合わせ | contact.html |

## デザイン方針

- モバイルファースト
- カラー：深緑（#1a5c38）・白（#ffffff）・紺（#1e3a5f）
- フォントサイズ：16px以上
- Tailwind CSS CDN使用（ビルド不要）

## 実装ルール

- コメントはロジックが自明でない場合のみ
- 動くものを先に作り、後で整える
- 既存ファイルを上書きする前に確認する
- コミットメッセージは日本語でOK

## 参照ドキュメント

- 要件定義：`docs/要件定義.md`
- Obsidian記録：`G:\マイドライブ\Obsidian\01_Clippings\20260307_甲子園町自治会サイト要件定義.md`
