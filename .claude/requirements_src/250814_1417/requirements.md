# 実装要件定義書：PBLフェーズ①ガイドブックWebサイト

## プロジェクト概要
PBL（Project Based Learning）のフェーズ①「現状（困りごとを見つける）」のガイドブックを、Webサイトとして公開する。既存のMarkdown形式のガイドブック要件を基に、Next.js 15 + TypeScript + Tailwind CSS + shadcn/uiで静的なコンテンツサイトとして構築する。

## 実装環境
- **プロジェクトパス**: `/Users/masashi/Documents/Cursor/YIC/academy/web/pbl-guidebook`
- **フレームワーク**: Next.js 15.4.6 (App Router)
- **言語**: TypeScript 5
- **スタイリング**: Tailwind CSS v4 + shadcn/ui
- **デプロイ**: Vercel（モノリポ対応済み）

## 機能要件

### 1. コンテンツ表示機能
- **ガイドブックセクション表示**
  - 理論編、実践編（Step1-4）の階層的表示
  - セクション間のナビゲーション
  - パンくずリストによる現在位置表示

- **レスポンシブデザイン**
  - モバイル、タブレット、デスクトップ対応
  - 読みやすいタイポグラフィ
  - 適切な余白とレイアウト

### 2. 補助機能
- **AIプロンプトコピー**
  - ワンクリックコピー機能（shadcn/ui Copy Button）
  - コピー成功通知（Toast）
  - プロンプトの見やすい表示（Card/Code Block）

- **チェックリスト表示**
  - 各ステップのチェックリスト表示
  - チェック状態の保存（オプション・localStorage）

### 3. ナビゲーション機能
- **サイドバーナビゲーション**
  - 目次の表示
  - 現在のセクションハイライト
  - モバイルでのドロワー表示（Sheet）
  - スムーズスクロール

- **ページ内検索**
  - ブラウザ標準の検索機能で対応（Ctrl+F）
  - 見出しへのアンカーリンク

### 4. 外部リンク
- **miroテンプレートリンク**
  - テンプレートへの外部リンク
  - 新規タブで開く設定

## 非機能要件

### 1. ユーザビリティ
- **アクセシビリティ**
  - WCAG 2.1 Level AA準拠
  - キーボード操作完全対応
  - スクリーンリーダー対応
  - 高コントラストモード

- **ユーザー体験**
  - 初回ロード3秒以内
  - スムーズなページ遷移
  - 適切なローディング表示
  - エラーメッセージの分かりやすさ

### 2. パフォーマンス
- **最適化**
  - Lighthouse Score 90以上
  - 画像の遅延読み込み
  - コード分割
  - キャッシュ戦略

### 3. 保守性
- **コード品質**
  - TypeScriptによる型安全性
  - ESLint/Prettierによる統一されたコードスタイル
  - コンポーネントの再利用性
  - 適切なコメント・ドキュメント

### 4. セキュリティ
- **基本的なセキュリティ対策**
  - XSS対策
  - CSRFトークン（必要に応じて）
  - 適切なContent Security Policy

## UI/デザインシステム要件

### 1. shadcn/ui導入計画

#### 必須コンポーネント
- **Button**: 基本的なボタン、リンクボタン
- **Card**: コンテンツカード、プロンプト表示
- **Copy Button**: プロンプトコピー専用
- **Toast**: コピー成功通知
- **Sheet**: モバイルナビゲーション

#### オプションコンポーネント
- **Accordion**: FAQ、折りたたみコンテンツ
- **Badge**: ラベル表示
- **Checkbox**: チェックリスト項目（必要に応じて）
- **Separator**: セクション区切り

### 2. テーマ設計
- **カラーパレット**
  - プライマリ: 青系（信頼性、学習）
  - セカンダリ: 緑系（成功、達成）
  - アクセント: オレンジ系（注目、ヒント）
  - エラー: 赤系
  - 背景: グレースケール

- **ダークモード対応**
  - システム設定連動
  - 手動切り替え可能
  - localStorageに設定保存

### 3. レイアウト設計
- **デスクトップ**
  - 3カラムレイアウト（サイドバー、メイン、TOC）
  - 最大幅1280px
  - 固定ヘッダー

- **モバイル**
  - シングルカラム
  - ボトムナビゲーション
  - ハンバーガーメニュー

## コンテンツ構成

### ページ構造
```
/ (ホーム)
├── /theory (理論編)
├── /practice
│   ├── /step1 (困りごと発見)
│   ├── /step2 (ペルソナ作成)
│   ├── /step3 (チーム選定)
│   └── /step4 (深掘り)
├── /tools
│   ├── /prompts (プロンプト集)
│   ├── /templates (テンプレート)
│   └── /checklist (チェックリスト)
├── /troubleshooting (トラブルシューティング)
└── /faq (よくある質問)
```

### データ管理
- **コンテンツソース**
  - Markdownファイル or TypeScriptオブジェクト
  - フロントマター対応
  - MDXサポート（オプション）

## 技術実装詳細

### 1. ディレクトリ構造
```
app/
├── (routes)/          # ルートグループ
├── components/        # コンポーネント
│   ├── ui/           # shadcn/ui
│   ├── layout/       # レイアウト（Header, Footer, Sidebar）
│   └── common/       # 共通（CopyButton等）
├── lib/              # ユーティリティ
├── types/            # 型定義
└── content/          # コンテンツデータ（Markdown or JSON）
```

### 2. 状態管理
- **グローバル状態**
  - React Context（テーマ設定のみ）

- **ローカル状態**
  - useState（シンプルな状態管理）
  - localStorage（チェックリスト状態の保存）

### 3. データフェッチング
- **静的生成（SSG）**
  - すべてのガイドコンテンツ
  - テンプレート、プロンプト集

- **クライアントサイド**
  - チェックリスト状態（localStorage）

## 実装優先順位

### Phase 1: 基本実装（必須）
1. 基本レイアウト構築（Header、Footer、Sidebar）
2. ホームページ実装
3. コンテンツページ実装
   - 理論編ページ
   - 実践編（Step1〜4）各ページ
   - ツールボックス（プロンプト集、テンプレート）
   - トラブルシューティング、FAQ
4. プロンプトコピー機能
5. ナビゲーション実装

### Phase 2: 改善（オプション）
6. チェックリスト機能
7. ダークモード対応
8. ページ遷移アニメーション
9. SEO最適化

### Phase 3: 追加機能（将来）
10. PWA対応
11. アナリティクス統合
12. 多言語対応

## 制約事項
- 既存のガイドブック要件に準拠
- AIツールはChatGPT/Claudeを前提
- ブラウザ要件: Chrome/Firefox/Safari/Edge最新版
- Node.js 18以上

## 成功基準
1. **コンテンツ完全性**: 元のガイドブック内容をすべて閲覧可能
2. **使いやすさ**: 見やすく、ナビゲーションが分かりやすい
3. **パフォーマンス**: 高速な表示（Lighthouse Score 90以上）
4. **レスポンシブ**: モバイル・デスクトップ両対応

---

## 実行・実装用プロンプト（新規スレッドにコピー＆ペースト）

```
/Users/masashi/Documents/Cursor/YIC/academy/.claude/requirements_src/250814_1417/ にある要件定義書とSOWに従って、PBLフェーズ①ガイドブックWebサイトを実装してください。

【作業開始前に必ず実行】
以下の内容をユーザーに確認してください：
1. プロジェクトのソースコードを直接編集すること
2. 影響を受ける予定のファイル：
   - /Users/masashi/Documents/Cursor/YIC/academy/web/pbl-guidebook/app/
   - /Users/masashi/Documents/Cursor/YIC/academy/web/pbl-guidebook/components/
   - /Users/masashi/Documents/Cursor/YIC/academy/web/pbl-guidebook/lib/
   - /Users/masashi/Documents/Cursor/YIC/academy/web/pbl-guidebook/content/
3. 作業前の状態確認：
   - gitでの変更管理状況
   - npm run devでの起動確認
   - npm run buildでのビルド確認

確認が取れてから作業を開始してください。

実行順序（優先度順）：

【Phase 1: 基本セットアップ】
1. sow/01_shadcn_setup.md - shadcn/ui初期設定とレイアウト構築
2. sow/02_content_preparation.md - コンテンツデータ構造と共通コンポーネント

【Phase 2: ページ実装】
3. sow/03_homepage_theory.md - ホームページと理論編
4. sow/04_practice_steps.md - 実践編（Step1〜4）
5. sow/05_toolbox.md - ツールボックス（プロンプト集、テンプレート、チェックリスト）

【Phase 3: 仕上げ】
6. sow/06_support_pages.md - 補助ページとナビゲーション機能
7. sow/07_optimization_deployment.md - 最適化とデプロイ準備

各SOWの「作業手順」セクションに従い、段階的に作業を進めてください。
Phase 1-2を完了させれば、基本的なWebサイトとして機能します。

元となるガイドブックコンテンツは以下を参照：
- /Users/masashi/Documents/Cursor/YIC/academy/.claude/requirements/250813_1028/requirements.md
- /Users/masashi/Documents/Cursor/YIC/academy/.claude/requirements/250813_1028/sow/
```