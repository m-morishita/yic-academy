# SOW: コンテンツデータ構造設計と共通コンポーネント作成

## 作業タイプ
実装タスク

## 作業環境
- プロジェクトルート: `/Users/masashi/Documents/Cursor/YIC/academy/web/pbl-guidebook`
- 作業対象ディレクトリ: `content/`, `components/common/`, `types/`

## 作業範囲
- 対象: コンテンツデータ構造、共通コンポーネント
- 作業内容: ガイドブックコンテンツのデータ化と表示コンポーネント作成
- 作業対象外: 個別ページの実装

## 実装手順
1. コンテンツディレクトリ構造作成
   - content/guide/ディレクトリ作成
   - content/prompts/ディレクトリ作成
   - content/templates/ディレクトリ作成
   - content/checklist/ディレクトリ作成

2. 型定義ファイル作成
   - types/index.ts作成
   ```typescript
   export interface GuideSection {
     id: string;
     title: string;
     content: string;
     subsections?: GuideSection[];
   }
   
   export interface Prompt {
     id: string;
     title: string;
     description: string;
     prompt: string;
     category: string;
   }
   
   export interface ChecklistItem {
     id: string;
     text: string;
     category: string;
   }
   ```

3. コンテンツデータファイル作成
   - content/guide/theory.ts（理論編データ）
   - content/guide/practice-step1.ts（Step1データ）
   - content/guide/practice-step2.ts（Step2データ）
   - content/guide/practice-step3.ts（Step3データ）
   - content/guide/practice-step4.ts（Step4データ）
   - content/prompts/index.ts（プロンプト集）
   - content/templates/index.ts（テンプレート）
   - content/checklist/index.ts（チェックリスト）
   
   ※元のガイドブック要件（/Users/masashi/Documents/Cursor/YIC/academy/.claude/requirements/250813_1028/）を参照してコンテンツを作成

4. 共通コンポーネント作成
   - components/common/PromptCard.tsx
   ```typescript
   // Cardコンポーネントを使用
   // プロンプトタイトル、説明、プロンプト本文を表示
   // CopyButtonを含む
   ```
   
   - components/common/CopyButton.tsx
   ```typescript
   // クリップボードAPIを使用
   // Toastで成功通知
   // Buttonコンポーネントを拡張
   ```

5. ナビゲーションデータ作成
   - lib/navigation.ts
   ```typescript
   export const navigationItems = [
     { title: "ホーム", href: "/" },
     { title: "理論編", href: "/theory" },
     {
       title: "実践編",
       items: [
         { title: "Step1: 困りごと発見", href: "/practice/step1" },
         { title: "Step2: ペルソナ作成", href: "/practice/step2" },
         { title: "Step3: チーム選定", href: "/practice/step3" },
         { title: "Step4: 深掘り", href: "/practice/step4" },
       ]
     },
     // ... 続き
   ];
   ```

## 参照コード
- 元のガイドブック要件: `/Users/masashi/Documents/Cursor/YIC/academy/.claude/requirements/250813_1028/requirements.md`
- 各SOWファイル: `/Users/masashi/Documents/Cursor/YIC/academy/.claude/requirements/250813_1028/sow/`

## 成果物
- types/index.ts（型定義）
- content/guide/（ガイドコンテンツ）
- content/prompts/index.ts（プロンプト集）
- content/templates/index.ts（テンプレート）
- content/checklist/index.ts（チェックリスト）
- components/common/PromptCard.tsx
- components/common/CopyButton.tsx
- lib/navigation.ts

## 検証方法
- TypeScript型チェック: `npm run typecheck`（存在する場合）
- コンポーネントの表示確認
- コピー機能の動作確認
- Toast通知の確認

## 注意事項
- コンテンツは元のガイドブック要件から正確に転記
- TypeScript型安全性を確保
- コンポーネントの再利用性を考慮