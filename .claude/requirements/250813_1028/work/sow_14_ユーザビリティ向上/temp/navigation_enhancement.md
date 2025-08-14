# ナビゲーション強化案

## 全体ナビゲーション構造

### 1. パンくずリストの追加
全ページ上部に現在位置を表示
```markdown
🏠 [目次](00_index.md) > 📚 [実践編](03_practice/) > 📍 **Step1: 困りごと発見**
```

### 2. 進捗インジケーター
各ステップページに進捗表示
```markdown
【進捗】 Step1 ✅ | Step2 ⭕ | Step3 ⭕ | Step4 ⭕
```

### 3. クイックジャンプメニュー
各ページに「このページの内容」セクション
```markdown
## 📑 このページの内容
- [概要](#概要)（2分）
- [準備](#準備)（3分）
- [実践](#実践)（15分）
- [チェック](#チェック)（5分）
```

## ファイル別ナビゲーション改善

### 00_index.md
```markdown
## 🚀 クイックスタート
あなたの状況に合わせて選択：

### 「今すぐ始めたい！」
→ [30分最速コース](#quick-30min)

### 「しっかり理解したい」
→ [標準2-3時間コース](#standard-course)

### 「チームで取り組む」
→ [チーム実践ガイド](#team-guide)

### 「困っている」
→ [トラブルシューティング](05_troubleshooting/)
```

### 各Stepファイル共通
```markdown
---
## 🧭 ナビゲーション
[◀ 前のステップ](previous.md) | [🏠 目次](../00_index.md) | [次のステップ ▶](next.md)

### 📍 現在地: Step X / 4
### ⏱️ 所要時間: XX分
### 📊 成果物: XXXXX
---
```

## 相互参照の追加

### 関連リンクセクション
各ページ末尾に追加
```markdown
## 🔗 関連情報

### 詳しく知りたい
- [理論的背景](02_theory.md#relevant-section)
- [応用テクニック](advanced.md)

### 困ったときは
- [よくある質問](05_troubleshooting/qa.md#stepX)
- [落とし穴と対策](05_troubleshooting/common_pitfalls.md#stepX)

### ツール
- [AIプロンプト](04_toolbox/ai_prompts.md#stepX)
- [テンプレート](04_toolbox/miro_templates.md#stepX)
```

## サイドバー的な情報配置

### 各ページに追加する固定要素
```markdown
<details>
<summary>💡 ヒント: クリックで展開</summary>

ここに補足情報や詳細な説明を記載
- 箇条書きで整理
- 本文を邪魔しない

</details>
```

## インデックスの充実

### 00_index.mdに追加するインデックス

#### 目的別インデックス
```markdown
## 🎯 目的別ガイド

### 「AIの使い方を知りたい」
- [AIツール準備](01_introduction.md#ai-setup)
- [基本プロンプト](04_toolbox/ai_prompts.md#basic)
- [カスタマイズ方法](04_toolbox/ai_prompts.md#customize)

### 「チーム運営で悩んでいる」
- [合意形成の方法](03_practice/step3_team_selection.md)
- [意見対立の解決](05_troubleshooting/common_pitfalls.md#team-conflict)

### 「時間がない」
- [30分コース](#quick-30min)
- [優先順位の付け方](05_troubleshooting/qa.md#priority)
```

#### ツール別インデックス
```markdown
## 🔧 ツール別ガイド

### ChatGPT
- [初期設定](01_introduction.md#chatgpt)
- [効果的な使い方](04_toolbox/ai_prompts.md#chatgpt)

### Claude
- [初期設定](01_introduction.md#claude)
- [効果的な使い方](04_toolbox/ai_prompts.md#claude)

### miro
- [アカウント作成](01_introduction.md#miro)
- [テンプレート](04_toolbox/miro_templates.md)
```

## アンカーリンクの整備

### 命名規則
- 英語小文字
- ハイフンで単語を接続
- セクション番号は使わない（変更に弱いため）

### 例
```markdown
## Step1の概要 {#step1-overview}
## 準備するもの {#preparation}
## 実践手順 {#practice-steps}
```

## モバイルナビゲーション配慮

### タップしやすいリンク
```markdown
### 📱 モバイルメニュー

<div style="line-height: 2.5;">

🏠 [目次へ](00_index.md)

📚 [実践編へ](03_practice/)

🛠️ [ツールへ](04_toolbox/)

❓ [Q&Aへ](05_troubleshooting/qa.md)

</div>
```

## 検索性の向上

### キーワードタグの追加
各ページに検索用タグを設置
```markdown
---
tags: #困りごと #問題発見 #AI活用 #個人ワーク
---
```

### 用語集へのリンク
専門用語に自動リンク
```markdown
[ペルソナ](glossary.md#persona)とは、[N=1思考](glossary.md#n-equals-one)に基づいて...
```