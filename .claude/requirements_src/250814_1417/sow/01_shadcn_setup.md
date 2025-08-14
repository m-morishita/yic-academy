# SOW: shadcn/ui初期設定とレイアウト構築

## 作業タイプ
実装タスク

## 作業環境
- プロジェクトルート: `/Users/masashi/Documents/Cursor/YIC/academy/web/pbl-guidebook`
- 作業対象ディレクトリ: `app/`, `components/`, `lib/`

## 作業範囲
- 対象: shadcn/ui初期設定、基本レイアウトコンポーネント
- 作業内容: shadcn/uiのセットアップと基本レイアウトの実装
- 作業対象外: ページコンテンツの実装

## 実装手順
1. shadcn/ui初期設定
   - shadcn/ui CLIのインストール: `npx shadcn-ui@latest init`
   - TypeScript、Tailwind CSS、App Router対応で設定
   - components.jsonの生成と確認
   - lib/utils.tsの作成（cn関数）

2. 必須コンポーネントの追加
   - Button追加: `npx shadcn-ui@latest add button`
   - Card追加: `npx shadcn-ui@latest add card`
   - Toast追加: `npx shadcn-ui@latest add toast`
   - Sheet追加: `npx shadcn-ui@latest add sheet`

3. レイアウトコンポーネント作成
   - components/layout/Header.tsx作成
     - ロゴ/タイトル表示
     - デスクトップ用ナビゲーションメニュー
     - モバイル用ハンバーガーボタン
   - components/layout/Footer.tsx作成
     - コピーライト表示
     - リンク集（必要に応じて）
   - components/layout/Sidebar.tsx作成
     - 目次表示（ネスト対応）
     - 現在位置のハイライト
     - スクロール可能な領域
   - components/layout/MobileNav.tsx作成
     - Sheetコンポーネント使用
     - モバイル用サイドバー

4. app/layout.tsx更新
   - メタデータ更新（title: "PBLフェーズ①ガイドブック"）
   - 言語設定を`ja`に変更
   - Header、Footerコンポーネントの組み込み
   - Toasterプロバイダーの追加

5. グローバルスタイル調整
   - app/globals.cssにshadcn/ui用CSS変数追加
   - 日本語フォント設定（Noto Sans JP等）
   - 基本的なレスポンシブ設定

## 参照コード
- 既存のapp/layout.tsx:1-34
- 既存のapp/page.tsx（参考用）
- shadcn/uiドキュメント参照

## 成果物
- components.json（shadcn/ui設定ファイル）
- lib/utils.ts（ユーティリティ関数）
- components/ui/（shadcn/uiコンポーネント）
- components/layout/Header.tsx
- components/layout/Footer.tsx
- components/layout/Sidebar.tsx
- components/layout/MobileNav.tsx
- 更新されたapp/layout.tsx

## 検証方法
- `npm run dev`で開発サーバー起動
- レイアウトの表示確認
- レスポンシブ動作確認（モバイル/デスクトップ）
- shadcn/uiコンポーネントの動作確認

## 注意事項
- Tailwind CSS v4との互換性を確認
- React 19との互換性を確認
- TypeScript strictモードでのエラーがないこと