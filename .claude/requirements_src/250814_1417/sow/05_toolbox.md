# SOW: ツールボックスページ実装

## 作業タイプ
実装タスク

## 作業環境
- プロジェクトルート: `/Users/masashi/Documents/Cursor/YIC/academy/web/pbl-guidebook`
- 作業対象ディレクトリ: `app/tools/`

## 作業範囲
- 対象: プロンプト集、テンプレート集、チェックリストページ
- 作業内容: ツールボックス内の各リソースページ実装
- 作業対象外: FAQ、トラブルシューティング

## 実装手順
1. ツールボックスディレクトリ構造作成
   - app/tools/ディレクトリ作成
   - app/tools/prompts/ディレクトリ作成
   - app/tools/templates/ディレクトリ作成
   - app/tools/checklist/ディレクトリ作成

2. プロンプト集ページ実装（app/tools/prompts/page.tsx）
   - タイトル: 「AIプロンプト集」
   - content/prompts/index.tsからデータ取得
   - カテゴリ別表示
     - 困りごと発見用プロンプト
     - ペルソナ生成用プロンプト
     - 深掘り・検証用プロンプト
     - カスタマイズ用プロンプト
   - 各プロンプトをPromptCardで表示
   - 検索/フィルター機能（オプション）
   ```typescript
   const promptCategories = [
     { id: 'discovery', title: '困りごと発見' },
     { id: 'persona', title: 'ペルソナ生成' },
     { id: 'validation', title: '検証・深掘り' },
   ];
   ```

3. テンプレート集ページ実装（app/tools/templates/page.tsx）
   - タイトル: 「テンプレート集」
   - content/templates/index.tsからデータ取得
   - テンプレート種類：
     - ペルソナシートテンプレート
     - 困りごと整理シート
     - チーム共有用フォーマット
   - ダウンロード可能な形式での提供（テキスト形式）
   - miroテンプレートへのリンク
   ```typescript
   <Card>
     <CardHeader>
       <CardTitle>ペルソナシート</CardTitle>
     </CardHeader>
     <CardContent>
       {/* テンプレート内容表示 */}
       <CopyButton text={templateContent} />
     </CardContent>
   </Card>
   ```

4. チェックリストページ実装（app/tools/checklist/page.tsx）
   - タイトル: 「チェックリスト」
   - content/checklist/index.tsからデータ取得
   - ステップ別チェックリスト表示
     - Step1完了チェックリスト
     - Step2完了チェックリスト
     - Step3完了チェックリスト
     - Step4完了チェックリスト
     - 最終確認チェックリスト
   - 静的な表示（インタラクティブなチェック機能なし）
   ```typescript
   <div className="checklist">
     <h3>Step1 完了チェックリスト</h3>
     <ul>
       <li>□ 個人の困りごとを5つ以上出せたか</li>
       <li>□ 具体的な場面を想像できるか</li>
       <li>□ 「なぜ」を3回以上問いかけたか</li>
     </ul>
   </div>
   ```

5. ツールボックスインデックスページ（app/tools/page.tsx）
   - ツールボックスの概要説明
   - 各ツールへのナビゲーションカード
   - 使い方ガイド

6. 共通要素実装
   - パンくずリスト
   - サイドナビゲーション
   - メタデータ設定

## 参照コード
- content/prompts/index.ts（プロンプトデータ）
- content/templates/index.ts（テンプレートデータ）
- content/checklist/index.ts（チェックリストデータ）
- components/common/PromptCard.tsx
- components/common/CopyButton.tsx

## 成果物
- app/tools/page.tsx（インデックス）
- app/tools/prompts/page.tsx（プロンプト集）
- app/tools/templates/page.tsx（テンプレート集）
- app/tools/checklist/page.tsx（チェックリスト）
- 各ページのメタデータ設定

## 検証方法
- 各ツールページの表示確認
- プロンプト・テンプレートのコピー機能確認
- カテゴリ別表示の確認
- ナビゲーションの動作確認
- レスポンシブ表示の確認

## 注意事項
- チェックリストは静的表示（チェック機能なし）
- プロンプトは用途別に整理して表示
- テンプレートはコピー可能な形式で提供
- miroリンクは外部リンクとして処理