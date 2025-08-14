# 影響範囲分析レポート

## 実装による影響範囲

### 完全に置き換えが必要なファイル
1. **app/page.tsx**
   - 現状: Next.jsデフォルトテンプレート
   - 変更後: PBLガイドブックのランディングページ
   - 影響: なし（完全置換）

### 修正が必要なファイル
1. **app/layout.tsx**
   - メタデータの更新（title, description, OGP）
   - 言語設定を`ja`に変更
   - 共通ナビゲーション・フッターの追加
   - ダークモード対応の実装

2. **app/globals.css**
   - カスタムCSS変数の追加（テーマカラー等）
   - shadcn/ui用のスタイル定義
   - プリント用スタイル（オプション）

### 新規作成が必要なファイル・ディレクトリ

#### ディレクトリ構造
```
app/
├── (routes)/                      # ルートグループ
│   ├── theory/                   # 理論編
│   │   └── page.tsx
│   ├── practice/                 # 実践編
│   │   ├── step1/               # Step1: 困りごと発見
│   │   │   └── page.tsx
│   │   ├── step2/               # Step2: ペルソナ作成
│   │   │   └── page.tsx
│   │   ├── step3/               # Step3: チーム選定
│   │   │   └── page.tsx
│   │   └── step4/               # Step4: 深掘り
│   │       └── page.tsx
│   ├── tools/                    # ツールボックス
│   │   ├── prompts/             # プロンプト集
│   │   │   └── page.tsx
│   │   ├── templates/           # テンプレート集
│   │   │   └── page.tsx
│   │   └── checklist/           # チェックリスト
│   │       └── page.tsx
│   ├── troubleshooting/         # トラブルシューティング
│   │   └── page.tsx
│   └── faq/                     # FAQ
│       └── page.tsx
├── components/                    # コンポーネント
│   ├── ui/                      # shadcn/uiコンポーネント
│   ├── layout/                  # レイアウトコンポーネント
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Sidebar.tsx
│   │   └── Navigation.tsx
│   └── common/                  # 共通コンポーネント
│       ├── PromptCard.tsx      # プロンプト表示カード
│       ├── CopyButton.tsx      # コピーボタン
│       ├── ChecklistItem.tsx   # チェックリスト項目（オプション）
│       └── ThemeToggle.tsx     # テーマ切り替え（オプション）
├── lib/                          # ユーティリティ
│   ├── utils.ts                # 汎用ユーティリティ
│   ├── storage.ts              # localStorage管理
│   └── constants.ts            # 定数定義
├── hooks/                        # カスタムフック（オプション）
│   ├── useTheme.ts            # テーマ管理
│   └── useLocalStorage.ts     # localStorage管理
├── types/                       # 型定義
│   └── index.ts
└── content/                     # コンテンツデータ
    ├── prompts/                # プロンプトデータ
    ├── templates/              # テンプレートデータ
    └── guide/                  # ガイドコンテンツ
```

## 機能実装の影響範囲

### 1. shadcn/ui導入の影響
- **components.json**の新規作成
- **lib/utils.ts**の作成（cn関数等）
- **app/globals.css**へのCSS変数追加
- 必須コンポーネントのみ追加（Button, Card, Copy Button, Toast, Sheet）

### 2. チェックリスト機能の影響（オプション）
- localStorageの使用（最小限）
- クライアントコンポーネントの実装（チェックボックスのみ）

### 3. ダークモード対応の影響（オプション）
- next-themesパッケージの追加
- テーマプロバイダーの実装
- Tailwindダークモード設定

## パフォーマンスへの影響

### ポジティブな影響
- Next.js 15の最適化機能活用
- 画像の自動最適化
- コード分割による初期ロード改善
- React Server Componentsの活用

### 考慮すべき点
- shadcn/uiコンポーネントのバンドルサイズ
- クライアントサイド処理の最小化
- 大量のコンテンツデータの管理方法

## SEOへの影響

### 改善点
- 適切なメタデータ設定
- 構造化データの実装
- サイトマップの生成
- OGP画像の設定

### 必要な実装
- 各ページのメタデータ定義
- JSON-LD構造化データ
- robots.txt, sitemap.xml

## ユーザビリティへの影響

### 改善される点
- インタラクティブな学習体験
- プロンプトの簡単コピー
- 進捗の可視化
- モバイル対応

### 新たに必要な考慮事項
- 初回ロード時のUX
- エラーハンドリング
- オフライン対応（PWA化の検討）

## 開発・運用への影響

### 開発環境
- コンポーネント開発の効率化
- TypeScriptによる型安全性
- ESLintによるコード品質管理

### デプロイ・運用
- Vercelへの自動デプロイ設定済み
- パフォーマンスモニタリング
- エラートラッキング（Sentry等の検討）

## リスクと軽減策

### 技術的リスク
1. **React 19/Next.js 15の安定性**
   - 軽減策: 十分なテスト、段階的リリース

2. **大量コンテンツの管理**
   - 軽減策: 適切なデータ構造設計、遅延読み込み

3. **ブラウザ互換性**
   - 軽減策: ポリフィル、プログレッシブエンハンスメント

### スケジュールリスク
- 15個のSOWを段階的に実装
- 最優先6タスクで最小限の機能を確保
- 継続的な改善アプローチ