---
description: 現在の対話ログをObsidianにエクスポートする
---

# 対話ログエクスポート

このワークフローは、現在の対話内容をObsidianにMarkdownファイルとして保存します。

## 手順

1. 現在の対話内容を分析し、サマリーを作成
2. 以下のフォーマットでMarkdownファイルを生成
3. `/Users/seiyaeto/Documents/Obsidian Vault/04_Output/AntigravityLogs/{YYYY-MM}/` に保存

## ファイルフォーマット

```markdown
---
conversation_id: {conversation_id}
date: {YYYY-MM-DD}
tags: [antigravity, conversation-log]
---

# {対話のタイトル}

## サマリー
{対話の概要を2-3行で}

## 主なトピック
- {トピック1}
- {トピック2}

## 成果物
- {作成したファイルやアーティファクト}

## 詳細ログ
{対話の要点を箇条書きで}
```

## ファイル命名規則
- 形式: `{YYYY-MM-DD}_{簡潔なタイトル}.md`
- 例: `2026-01-27_対話ログエクスポート設計.md`
