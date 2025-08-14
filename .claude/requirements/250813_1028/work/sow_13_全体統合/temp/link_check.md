# リンクチェック結果

## 調査日時
2025/08/13

## 問題点

### 1. パス構造の不整合
現在、各ファイルは以下のような相対パスでリンクしていますが、実際のディレクトリ構造と一致していません：

#### 現在のリンク例
- `../00_index.md` 
- `../02_theory.md`
- `../03_practice/step1_find_problems.md`
- `../04_toolbox/ai_prompts.md`
- `../05_troubleshooting/common_pitfalls.md`

#### 実際のファイル配置
```
work/
├── sow_01_全体構造設計/output/00_index.md
├── sow_02_はじめに作成/output/01_introduction.md
├── sow_03_理論編作成/output/02_theory.md
├── sow_04_step1_困りごと発見/output/step1_find_problems.md
├── sow_05_step2_ペルソナ作成/output/step2_create_personas.md
├── sow_06_step3_チーム選定/output/step3_team_selection.md
├── sow_07_step4_深掘り/output/step4_deep_dive.md
├── sow_08_AIプロンプト集/output/ai_prompts.md
├── sow_09_miroテンプレート/output/miro_templates.md
├── sow_10_チェックリスト集/output/checklists.md
├── sow_11_よくある落とし穴/output/common_pitfalls.md
└── sow_12_QAセクション/output/qa.md
```

### 2. 修正が必要なリンクパターン

#### パターン1: 目次へのリンク
- 現在: `../00_index.md`
- 修正案: 統合後のディレクトリ構造に合わせて調整

#### パターン2: セクション間のリンク
- 現在: `../02_theory.md`
- 修正案: 統合後のディレクトリ構造に合わせて調整

#### パターン3: 実践編へのリンク
- 現在: `../03_practice/step1_find_problems.md`
- 修正案: 統合後のディレクトリ構造に合わせて調整

#### パターン4: ツールボックスへのリンク
- 現在: `../04_toolbox/ai_prompts.md`
- 修正案: 統合後のディレクトリ構造に合わせて調整

#### パターン5: トラブルシューティングへのリンク
- 現在: `../05_troubleshooting/common_pitfalls.md`
- 修正案: 統合後のディレクトリ構造に合わせて調整

## 推奨する統合後のディレクトリ構造

```
guidebook/
├── 00_index.md
├── 01_introduction.md
├── 02_theory.md
├── 03_practice/
│   ├── step1_find_problems.md
│   ├── step2_create_personas.md
│   ├── step3_team_selection.md
│   └── step4_deep_dive.md
├── 04_toolbox/
│   ├── ai_prompts.md
│   ├── miro_templates.md
│   └── checklists.md
└── 05_troubleshooting/
    ├── common_pitfalls.md
    └── qa.md
```

## 修正計画

1. 統合先ディレクトリ（guidebook/）を作成
2. 各ファイルを適切な場所にコピー
3. リンクパスを新しい構造に合わせて更新
4. リンクの動作確認