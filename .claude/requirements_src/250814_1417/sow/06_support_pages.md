# SOW: 補助ページとナビゲーション機能実装

## 作業タイプ
実装タスク

## 作業環境
- プロジェクトルート: `/Users/masashi/Documents/Cursor/YIC/academy/web/pbl-guidebook`
- 作業対象ディレクトリ: `app/troubleshooting/`, `app/faq/`, `components/`

## 作業範囲
- 対象: トラブルシューティング、FAQ、ナビゲーション強化
- 作業内容: 補助ページの実装とサイト全体のナビゲーション改善
- 作業対象外: コンテンツの大幅な変更

## 実装手順
1. トラブルシューティングページ実装（app/troubleshooting/page.tsx）
   - タイトル: 「トラブルシューティング」
   - よくある落とし穴と対処法
   - セクション構成：
     - 困りごとが出ない時
     - ペルソナが抽象的になる時
     - チームで意見が割れた時
     - AIがうまく動作しない時
   - 問題と解決策のカード表示
   ```typescript
   <Card>
     <CardHeader>
       <CardTitle>困りごとが出ない時</CardTitle>
     </CardHeader>
     <CardContent>
       <p>原因：視野が狭くなっている可能性</p>
       <p>対処法：日常の小さな「面倒だな」から始める</p>
     </CardContent>
   </Card>
   ```

2. FAQページ実装（app/faq/page.tsx）
   - タイトル: 「よくある質問」
   - Q&A形式での表示
   - Accordionコンポーネントの活用（オプション）
   - カテゴリ分け：
     - 全般的な質問
     - AI活用に関する質問
     - チーム作業に関する質問
     - 成果物に関する質問
   ```typescript
   const faqItems = [
     {
       question: "ChatGPTとClaudeどちらを使えばいい？",
       answer: "どちらでも構いません。無料版でも十分です。"
     },
     // ...
   ];
   ```

3. パンくずリストコンポーネント作成（components/common/Breadcrumb.tsx）
   - 現在位置の表示
   - 階層的なナビゲーション
   - レスポンシブ対応
   ```typescript
   export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
     return (
       <nav aria-label="パンくずリスト">
         <ol className="flex items-center space-x-2">
           {items.map((item, index) => (
             // 実装
           ))}
         </ol>
       </nav>
     );
   }
   ```

4. ナビゲーション強化
   - components/layout/Sidebar.tsx の改善
     - 現在ページのハイライト強化
     - スムーズスクロール実装
     - 折りたたみ可能なセクション
   - ページ内アンカーリンク実装
     - 見出しへの自動ID付与
     - スムーズスクロール対応
   - トップへ戻るボタン実装
     ```typescript
     export function ScrollToTop() {
       // スクロール位置検知
       // 一定以上スクロールで表示
       // クリックでトップへスムーズスクロール
     }
     ```

5. 404ページ作成（app/not-found.tsx）
   - カスタム404ページ
   - ホームへのリンク
   - サイトマップへのリンク

6. メタデータとSEO設定
   - 各ページの個別メタデータ
   - OGP画像設定（オプション）
   - 構造化データ（オプション）

## 参照コード
- content/guide/（既存コンテンツ）
- components/layout/Sidebar.tsx（改善対象）
- lib/navigation.ts（ナビゲーション定義）

## 成果物
- app/troubleshooting/page.tsx
- app/faq/page.tsx
- app/not-found.tsx
- components/common/Breadcrumb.tsx
- components/common/ScrollToTop.tsx
- 改善されたcomponents/layout/Sidebar.tsx
- 各ページのメタデータ設定

## 検証方法
- トラブルシューティングページの表示確認
- FAQページの表示確認
- パンくずリストの動作確認
- サイドバーのハイライト確認
- スムーズスクロールの動作確認
- 404ページの表示確認

## 注意事項
- FAQは静的コンテンツとして実装
- Accordionコンポーネントは必要に応じて追加
- SEO設定は基本的なもののみ実装
- アクセシビリティに配慮（ARIA属性等）