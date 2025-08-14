# PBLフェーズ①ガイドブック

## 📚 概要

PBL（Project Based Learning）のフェーズ①「現状（困りごとを見つける）」のための実践的なガイドブックWebサイトです。学生から社会人まで幅広い層が、AIを活用しながら効率的に困りごとを発見し、リアルなペルソナを作成するための手順とツールを提供します。

## 🎯 特徴

### 実装済み機能
- **理論編・実践編**: ステップバイステップで学べる構造化されたコンテンツ
- **AIプロンプト集**: ChatGPT/Claude用のコピペ可能な10種類以上のプロンプト
- **インタラクティブなチェックリスト**: 進捗を可視化しながら作業を進められる
- **テンプレート集**: 困りごと整理シート、ペルソナシートなど5種類
- **トラブルシューティング**: よくある7つの問題と解決方法
- **FAQ**: 20以上のよくある質問と回答
- **レスポンシブデザイン**: モバイル、タブレット、デスクトップ完全対応
- **スクロールトップボタン**: ページ内ナビゲーション改善
- **404ページ**: カスタムエラーページ

## 🛠 技術スタック

- **フレームワーク**: Next.js 15.4.6 (App Router)
- **言語**: TypeScript 5
- **スタイリング**: Tailwind CSS v4
- **UIコンポーネント**: shadcn/ui
- **フォント**: Noto Sans JP（日本語対応）
- **アイコン**: Lucide Icons
- **デプロイ**: Vercel

## 🚀 開発環境セットアップ

### 必要な環境
- Node.js 18以上
- npm または yarn

### インストール
```bash
# 依存関係のインストール
npm install
```

### 開発サーバーの起動
```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

## 📦 ビルド

```bash
# プロダクションビルド
npm run build

# ビルドしたアプリケーションの起動
npm start
```

## 🧪 検証

```bash
# TypeScriptの型チェック
npm run build

# ESLintによるコード品質チェック
npm run lint
```

## 📂 プロジェクト構造

```
pbl-guidebook/
├── app/                  # Next.js App Router
│   ├── practice/        # 実践編ページ (Step1-4)
│   ├── theory/          # 理論編ページ
│   ├── tools/           # ツールボックス
│   ├── troubleshooting/ # トラブルシューティング
│   ├── faq/            # FAQ
│   ├── layout.tsx       # 共通レイアウト
│   └── page.tsx         # ホームページ
├── components/          # Reactコンポーネント
│   ├── ui/             # shadcn/uiコンポーネント
│   ├── layout/         # Header, Footer, Sidebar
│   └── common/         # CopyButton, PromptCard等
├── content/            # コンテンツデータ
│   ├── guide/         # ガイドブックコンテンツ
│   ├── prompts/       # AIプロンプト集
│   ├── templates/     # テンプレート集
│   ├── checklist/     # チェックリスト項目
│   ├── troubleshooting/ # トラブルシューティング
│   └── faq/           # FAQ項目
├── lib/               # ユーティリティ関数
├── types/             # TypeScript型定義
└── public/            # 静的ファイル
    └── robots.txt     # SEO設定
```

## 🌐 デプロイ

Vercelへの自動デプロイが設定されています。

### モノリポからのデプロイ設定
- **Root Directory**: `web/pbl-guidebook`
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

## 📝 主なページ

- `/` - ホームページ
- `/theory` - 理論編
- `/practice/step1` - Step1: 困りごとを見つける
- `/practice/step2` - Step2: ペルソナを作る
- `/practice/step3` - Step3: チームで選ぶ
- `/practice/step4` - Step4: 深掘りする
- `/tools/prompts` - AIプロンプト集
- `/tools/templates` - テンプレート集
- `/tools/checklist` - チェックリスト
- `/troubleshooting` - トラブルシューティング
- `/faq` - よくある質問

## 🎨 デザインシステム

- **カラーパレット**: Neutral系をベース、Primary色に青系を使用
- **ダークモード**: システム設定に連動
- **レスポンシブブレークポイント**:
  - sm: 640px（モバイル）
  - md: 768px（タブレット）
  - lg: 1024px（デスクトップ）

## 📊 パフォーマンス目標

- Lighthouse Score: 90以上（全カテゴリ）
- First Contentful Paint: 1.5秒以内
- Time to Interactive: 3秒以内
- アクセシビリティ: WCAG 2.1 Level AA準拠

## 🔧 開発ガイドライン

このプロジェクトは `/academy` ワークスペースのモノリポの一部として管理されています。

### コーディング規約
- TypeScript strictモードを使用
- 関数コンポーネントを使用
- Tailwind CSSでスタイリング
- セマンティックHTMLを使用

## 📄 ライセンス

プライベートプロジェクト