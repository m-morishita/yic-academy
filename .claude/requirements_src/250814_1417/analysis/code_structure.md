# コード構造分析レポート

## プロジェクト概要
- **プロジェクトパス**: `/Users/masashi/Documents/Cursor/YIC/academy/web/pbl-guidebook`
- **フレームワーク**: Next.js 15.4.6 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS v4
- **デプロイ環境**: Vercel（モノリポ対応済み）

## 現在の実装状況

### ディレクトリ構造
```
pbl-guidebook/
├── app/                    # App Router ディレクトリ
│   ├── page.tsx           # デフォルトのホームページ（要置換）
│   ├── layout.tsx         # ルートレイアウト（メタデータ等要更新）
│   ├── globals.css        # グローバルスタイル（Tailwind設定済み）
│   └── favicon.ico        # ファビコン
├── public/                # 静的アセット
│   └── *.svg             # デフォルトのSVGアイコン類
├── package.json          # プロジェクト設定
├── tsconfig.json         # TypeScript設定
├── tailwind.config.ts    # Tailwind設定
├── next.config.ts        # Next.js設定
└── vercel.json          # Vercelデプロイ設定
```

### 技術スタック詳細
- **React**: 19.1.0（最新版）
- **Next.js**: 15.4.6（最新版、Turbopack対応）
- **TypeScript**: ^5
- **Tailwind CSS**: v4（最新版）
- **ESLint**: ^9（設定済み）

### 実装の現状
1. **基本環境構築**: 完了
   - Next.js App Routerの初期セットアップ完了
   - TypeScript環境構築済み
   - Tailwind CSS v4導入済み
   - Vercelデプロイ設定済み

2. **コンテンツ実装**: 未着手
   - 現在はNext.jsのデフォルトテンプレートのまま
   - ガイドブック用のページ・コンポーネントは未実装

3. **必要な追加実装**
   - shadcn/uiコンポーネントライブラリの導入
   - ページルーティングの設計・実装
   - コンポーネント設計・実装
   - コンテンツ管理システムの構築

## 既存コードの分析

### app/page.tsx
- **現状**: Next.jsのデフォルトテンプレート
- **対応**: 完全に置き換えが必要（ヒーローセクション、概要等）

### app/layout.tsx
- **現状**: 基本的なレイアウト設定
- **対応**: 
  - メタデータの更新（title, description）
  - 言語設定を日本語（ja）に変更
  - ナビゲーション等の共通要素追加

### app/globals.css
- **現状**: Tailwind CSSの基本設定
- **対応**: カスタムスタイルの追加（必要に応じて）

## コーディング規約の確認

### TypeScript
- strict modeが有効
- App Router規約に準拠
- React Server Components使用

### スタイリング
- Tailwind CSS v4のユーティリティクラス使用
- CSS ModulesやCSS-in-JSは使用しない方針

### ファイル命名規則
- コンポーネント: PascalCase（例: `Button.tsx`）
- ページファイル: `page.tsx`
- レイアウト: `layout.tsx`
- ユーティリティ: camelCase（例: `formatDate.ts`）

## 既存要件との対応関係

### 元となるガイドブック要件
- **ソース**: `/Users/masashi/Documents/Cursor/YIC/academy/.claude/requirements/250813_1028/`
- **SOW数**: 15個のタスク定義済み
- **優先度**: 最優先6タスク、高優先4タスク、中優先3タスク、低優先2タスク

### Web化における技術的考慮事項
1. **レスポンシブデザイン**: Tailwindのブレークポイント活用
2. **アクセシビリティ**: WCAG 2.1 Level AA準拠（Radix UI活用）
3. **パフォーマンス**: Next.jsの最適化機能活用（画像最適化、コード分割）
4. **SEO**: メタデータ、構造化データの実装