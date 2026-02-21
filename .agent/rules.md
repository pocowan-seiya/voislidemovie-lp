# Antigravity Custom Rules

## 対話ログ自動エクスポート

対話が一段落した時（タスク完了時、質問への回答完了時など）、以下の条件を満たす場合は自動的にObsidianにログを保存してください：

### 条件
- 対話に実質的な内容がある（単なる挨拶や1往復の質問のみでない）
- コード作成、設計、調査など成果物がある対話

### 保存先
- パス: `/Users/seiyaeto/Documents/Obsidian Vault/04_Output/AntigravityLogs/{YYYY-MM}/`
- ファイル名: `{date}_{簡潔なタイトル}.md`

### ログのフォーマット

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
