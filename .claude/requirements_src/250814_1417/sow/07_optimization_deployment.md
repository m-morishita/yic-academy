# SOW: 最適化とデプロイ準備

## 作業タイプ
実装タスク

## 作業環境
- プロジェクトルート: `/Users/masashi/Documents/Cursor/YIC/academy/web/pbl-guidebook`
- 作業対象: プロジェクト全体

## 作業範囲
- 対象: パフォーマンス最適化、SEO、アクセシビリティ、デプロイ準備
- 作業内容: 品質向上とプロダクション環境への準備
- 作業対象外: 新機能の追加

## 実装手順
1. レスポンシブデザインの最終調整
   - 全ページのモバイル表示確認
   - タブレット表示の最適化
   - ブレークポイントの調整
   ```css
   /* Tailwind設定例 */
   sm: 640px  /* モバイル */
   md: 768px  /* タブレット */
   lg: 1024px /* デスクトップ */
   ```

2. パフォーマンス最適化
   - 画像最適化
     - next/imageコンポーネントの活用
     - 適切なサイズとフォーマット設定
     - 遅延読み込みの実装
   - フォント最適化
     - next/fontの使用
     - 日本語フォントのサブセット化
   - コード分割の確認
     - 動的インポートの活用（必要に応じて）
     - バンドルサイズの確認

3. SEO最適化
   - robots.txt作成（public/robots.txt）
   ```
   User-agent: *
   Allow: /
   Sitemap: https://[domain]/sitemap.xml
   ```
   - sitemap.xml生成（app/sitemap.ts）
   ```typescript
   export default function sitemap() {
     return [
       { url: 'https://[domain]/', lastModified: new Date() },
       { url: 'https://[domain]/theory', lastModified: new Date() },
       // 全ページ分
     ];
   }
   ```
   - 各ページのメタデータ最終確認

4. アクセシビリティ対応
   - 適切なARIA属性の追加
   - キーボードナビゲーションの確認
   - フォーカス管理
   - カラーコントラストの確認（WCAG 2.1 AA）
   - alt属性の確認

5. エラーハンドリング
   - app/error.tsx作成（エラーバウンダリ）
   ```typescript
   'use client';
   export default function Error({
     error,
     reset,
   }: {
     error: Error;
     reset: () => void;
   }) {
     return (
       <div>
         <h2>エラーが発生しました</h2>
         <button onClick={() => reset()}>再試行</button>
       </div>
     );
   }
   ```
   - loading.tsx作成（ローディング状態）

6. ビルドと品質チェック
   - TypeScriptエラーの解消
     ```bash
     npm run build
     ```
   - ESLintエラーの修正
     ```bash
     npm run lint
     ```
   - Lighthouse監査
     - Performance: 90以上
     - Accessibility: 90以上
     - Best Practices: 90以上
     - SEO: 90以上

7. Vercelデプロイ設定確認
   - vercel.json確認
   - 環境変数設定（必要に応じて）
   - ビルド設定確認
   - プレビューデプロイでの動作確認

8. ドキュメント作成
   - README.md更新
   ```markdown
   # PBLフェーズ①ガイドブック
   
   ## 概要
   [プロジェクトの説明]
   
   ## 開発環境セットアップ
   ```bash
   npm install
   npm run dev
   ```
   
   ## ビルド
   ```bash
   npm run build
   ```
   
   ## デプロイ
   Vercelへの自動デプロイ設定済み
   ```

## 参照コード
- next.config.ts（設定確認）
- vercel.json（デプロイ設定）
- package.json（スクリプト確認）

## 成果物
- public/robots.txt
- app/sitemap.ts
- app/error.tsx
- app/loading.tsx（オプション）
- 最適化された画像アセット
- 更新されたREADME.md
- Lighthouseレポート

## 検証方法
- ビルド成功確認: `npm run build`
- Lint通過確認: `npm run lint`
- Lighthouse監査でスコア90以上
- 全ブラウザでの動作確認
- モバイル実機での確認
- Vercelプレビューでの確認

## 注意事項
- ビルドエラーは必ず解消
- パフォーマンススコアを優先
- アクセシビリティ基準を満たす
- 本番環境での動作を必ず確認