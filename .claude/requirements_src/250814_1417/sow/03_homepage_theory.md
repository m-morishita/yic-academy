# SOW: ホームページと理論編ページ実装

## 作業タイプ
実装タスク

## 作業環境
- プロジェクトルート: `/Users/masashi/Documents/Cursor/YIC/academy/web/pbl-guidebook`
- 作業対象ディレクトリ: `app/`, `app/theory/`

## 作業範囲
- 対象: ホームページ、理論編ページ
- 作業内容: ランディングページと理論編コンテンツページの実装
- 作業対象外: 実践編、ツールボックスページ

## 実装手順
1. ホームページ実装（app/page.tsx）
   - 既存のデフォルトページを完全に置き換え
   - ヒーローセクション実装
     ```typescript
     <section className="hero">
       <h1>PBLフェーズ①ガイドブック</h1>
       <p>困りごとを見つけて、ペルソナを作る実践ガイド</p>
     </section>
     ```
   - 概要説明セクション
     - PBLフェーズ①の説明
     - このガイドブックでできること
     - 対象者の説明
   - ナビゲーションカード
     - 理論編へのリンクカード
     - 実践編Step1-4へのリンクカード
     - ツールボックスへのリンクカード
     - CardコンポーネントとButtonコンポーネント使用

2. 理論編ディレクトリ作成
   - app/theory/ディレクトリ作成
   - app/theory/page.tsx作成

3. 理論編ページ実装（app/theory/page.tsx）
   - content/guide/theory.tsからデータ取得
   - ページレイアウト実装
     ```typescript
     export default function TheoryPage() {
       const theoryContent = getTheoryContent();
       return (
         <div className="container">
           <h1>{theoryContent.title}</h1>
           <div className="prose">
             {/* コンテンツ表示 */}
           </div>
         </div>
       );
     }
     ```
   - セクション構成
     - なぜ困りごとから始めるのか
     - N=1の重要性
     - ペルソナ思考の基礎
   - パンくずリスト実装
   - 次のステップへのナビゲーション

4. レイアウト統合
   - Sidebarコンポーネントとの連携
   - 現在ページのハイライト設定
   - モバイルレスポンシブ対応

5. メタデータ設定
   - 各ページのメタデータ設定
   ```typescript
   export const metadata: Metadata = {
     title: "理論編 | PBLフェーズ①ガイドブック",
     description: "なぜ困りごとから始めるのか、ペルソナ思考の基礎を学ぶ",
   };
   ```

## 参照コード
- 既存のapp/page.tsx:1-103（置き換え対象）
- components/layout/Sidebar.tsx（連携）
- content/guide/theory.ts（コンテンツデータ）
- lib/navigation.ts（ナビゲーション定義）

## 成果物
- 更新されたapp/page.tsx（ホームページ）
- app/theory/page.tsx（理論編ページ）
- 適切なメタデータ設定

## 検証方法
- ホームページの表示確認
- 理論編ページの表示確認
- ページ間のナビゲーション動作
- レスポンシブデザインの確認
- サイドバーとの連携確認

## 注意事項
- 既存のpage.tsxは完全に置き換え
- コンテンツは元のガイドブック要件に準拠
- Tailwind CSSのユーティリティクラスを活用
- セマンティックHTMLを使用