# SOW: 実践編ページ実装（Step1〜4）

## 作業タイプ
実装タスク

## 作業環境
- プロジェクトルート: `/Users/masashi/Documents/Cursor/YIC/academy/web/pbl-guidebook`
- 作業対象ディレクトリ: `app/practice/`

## 作業範囲
- 対象: 実践編の各ステップページ
- 作業内容: Step1〜4の各ページ実装とプロンプト表示
- 作業対象外: ツールボックス、トラブルシューティング

## 実装手順
1. 実践編ディレクトリ構造作成
   - app/practice/ディレクトリ作成
   - app/practice/step1/ディレクトリ作成
   - app/practice/step2/ディレクトリ作成
   - app/practice/step3/ディレクトリ作成
   - app/practice/step4/ディレクトリ作成

2. Step1ページ実装（app/practice/step1/page.tsx）
   - タイトル: 「Step1: 困りごとを見つける（個人ワーク）」
   - content/guide/practice-step1.tsからコンテンツ取得
   - セクション構成：
     - 目的と概要
     - 具体的な手順
     - AIプロンプト表示（PromptCardコンポーネント使用）
     - よくある失敗例
     - チェックポイント
   - プロンプトコピー機能実装

3. Step2ページ実装（app/practice/step2/page.tsx）
   - タイトル: 「Step2: ペルソナを作る（AI活用）」
   - content/guide/practice-step2.tsからコンテンツ取得
   - セクション構成：
     - ペルソナとは何か
     - N=1の考え方
     - AIを使ったペルソナ生成手順
     - ペルソナ生成プロンプト（複数パターン）
     - サンプルペルソナ表示
   - 複数のプロンプトカード配置

4. Step3ページ実装（app/practice/step3/page.tsx）
   - タイトル: 「Step3: チームで選ぶ（miro活用）」
   - content/guide/practice-step3.tsからコンテンツ取得
   - セクション構成：
     - チーム共有の重要性
     - miroを使った可視化手順
     - 投票・優先順位付けの方法
     - 合意形成のポイント
   - miroテンプレートへの外部リンク実装

5. Step4ページ実装（app/practice/step4/page.tsx）
   - タイトル: 「Step4: 深掘りする（検証・改善）」
   - content/guide/practice-step4.tsからコンテンツ取得
   - セクション構成：
     - 深掘りの目的
     - 具体性を高める方法
     - リアリティの追加
     - 検証プロンプト
     - 最終チェックリスト

6. 共通要素実装
   - 各ページにパンくずリスト追加
   - ステップ間のナビゲーション（前へ/次へボタン）
   - プログレス表示（Step 1/4のような表示）
   - メタデータ設定（各ページ個別）

7. プロンプト表示の統一
   ```typescript
   import { PromptCard } from '@/components/common/PromptCard';
   
   // 使用例
   <PromptCard
     title="困りごと発見プロンプト"
     description="個人の困りごとを見つけるためのプロンプト"
     prompt={promptContent}
   />
   ```

## 参照コード
- content/guide/practice-step*.ts（各ステップのコンテンツ）
- content/prompts/index.ts（プロンプト集）
- components/common/PromptCard.tsx（プロンプト表示）
- components/common/CopyButton.tsx（コピー機能）

## 成果物
- app/practice/step1/page.tsx
- app/practice/step2/page.tsx
- app/practice/step3/page.tsx
- app/practice/step4/page.tsx
- 各ページの適切なメタデータ

## 検証方法
- 各ステップページの表示確認
- プロンプトコピー機能の動作確認
- ステップ間のナビゲーション確認
- パンくずリストの動作確認
- レスポンシブ表示の確認

## 注意事項
- 各ステップの内容は元のガイドブック要件に準拠
- プロンプトは正確にコピー可能な形式で表示
- miroリンクは新規タブで開く設定
- ステップの順序と関連性を明確に表示