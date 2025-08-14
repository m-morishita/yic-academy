# 修正箇所リスト

## 作成日時
2025/08/13

## 優先度別修正項目

### 🔴 優先度: 高（必須修正）

#### 1. ディレクトリ構造の統合
**対象**: 全ファイル
**内容**: 分散しているファイルを統合ディレクトリに集約
**作業**:
```
1. guidebook/ ディレクトリを作成
2. 以下の構造で配置:
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

#### 2. リンクパスの修正
**対象**: 全ファイル内のリンク
**修正内容**:
- `../00_index.md` → `../00_index.md`（階層に応じて調整）
- `../02_theory.md` → `../02_theory.md`
- `../03_practice/step1_find_problems.md` → 適切なパスに
- `../04_toolbox/ai_prompts.md` → 適切なパスに
- `../05_troubleshooting/common_pitfalls.md` → 適切なパスに

### 🟡 優先度: 中（推奨修正）

#### 3. 用語の統一
**対象**: 全ファイル
**修正内容**:
| 修正前 | 修正後 |
|--------|--------|
| 30 分、３０分 | 30分 |
| 3つ、３つ、三つ | 3つ |
| Step、ステップ（混在） | Step（見出し）、ステップ（本文） |

#### 4. ナビゲーション記号の統一
**対象**: 全ファイル
**修正内容**:
- ナビゲーション: 「▶」で統一
- 説明の流れ: 「→」で統一
- その他の矢印記号を上記に統一

### 🟢 優先度: 低（任意修正）

#### 5. 成果物保存方法の明確化
**対象**: 各Stepファイル
**追加内容**:
- 保存形式の説明
- ファイル名の推奨規則
- バックアップ方法

#### 6. 重要度マークの追加
**対象**: 各セクション
**追加内容**:
- ★★★ 必須
- ★★☆ 推奨
- ★☆☆ 任意

## ファイル別修正箇所

### 00_index.md
- [x] 既存のリンクは相対パスで問題なし（同階層のファイルへの参照）
- [ ] 03_practice/、04_toolbox/、05_troubleshooting/への参照を確認

### 01_introduction.md
- [ ] `../00_index.md` → `00_index.md`
- [ ] `../02_theory.md` → `02_theory.md`
- [ ] `../03_practice/step1_find_problems.md` → `03_practice/step1_find_problems.md`

### 02_theory.md
- [ ] `../00_index.md` → `00_index.md`
- [ ] `../01_introduction.md` → `01_introduction.md`
- [ ] `../03_practice/step1_find_problems.md` → `03_practice/step1_find_problems.md`

### step1_find_problems.md
- [ ] `../00_index.md` → `../00_index.md`
- [ ] `../02_theory.md` → `../02_theory.md`
- [ ] `step2_create_personas.md` → そのまま（同階層）
- [ ] `../04_toolbox/ai_prompts.md` → `../04_toolbox/ai_prompts.md`
- [ ] `../05_troubleshooting/qa.md` → `../05_troubleshooting/qa.md`

### step2_create_personas.md
- [ ] 同様のパス修正

### step3_team_selection.md
- [ ] 同様のパス修正

### step4_deep_dive.md
- [ ] 同様のパス修正

### ai_prompts.md
- [ ] `../00_index.md` → `../00_index.md`
- [ ] `../03_practice/step1_find_problems.md` → `../03_practice/step1_find_problems.md`
- [ ] 他のtoolbox内ファイルへの参照を確認

### miro_templates.md
- [ ] 同様のパス修正

### checklists.md
- [ ] 同様のパス修正

### common_pitfalls.md
- [ ] `../00_index.md` → `../00_index.md`
- [ ] `../04_toolbox/checklists.md` → `../04_toolbox/checklists.md`
- [ ] `qa.md` → そのまま（同階層）

### qa.md
- [ ] `../00_index.md` → `../00_index.md`
- [ ] `common_pitfalls.md` → そのまま（同階層）
- [ ] `../03_practice/step1_find_problems.md` → `../03_practice/step1_find_problems.md`
- [ ] `../04_toolbox/ai_prompts.md` → `../04_toolbox/ai_prompts.md`

## 修正実施計画

### Phase 1: 構造作成（5分）
1. guidebook/ディレクトリ作成
2. サブディレクトリ作成
3. ファイルコピー

### Phase 2: リンク修正（30分）
1. 各ファイルのリンクを新構造に合わせて修正
2. sedコマンドまたは手動で一括置換

### Phase 3: 用語統一（15分）
1. 数字・時間表記の統一
2. 記号の統一

### Phase 4: 動作確認（10分）
1. 全リンクの動作確認
2. 表示確認

## 完了基準

- [ ] 全ファイルが新ディレクトリ構造に配置
- [ ] 全リンクが正常に動作
- [ ] 用語が統一されている
- [ ] ナビゲーションがスムーズ
- [ ] 初見の人が迷わず読める