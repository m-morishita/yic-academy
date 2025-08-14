# 依存関係分析レポート

## 現在の依存関係

### 本番依存関係（dependencies）
```json
{
  "react": "19.1.0",
  "react-dom": "19.1.0",
  "next": "15.4.6"
}
```

### 開発依存関係（devDependencies）
```json
{
  "typescript": "^5",
  "@types/node": "^20",
  "@types/react": "^19",
  "@types/react-dom": "^19",
  "@tailwindcss/postcss": "^4",
  "tailwindcss": "^4",
  "eslint": "^9",
  "eslint-config-next": "15.4.6",
  "@eslint/eslintrc": "^3"
}
```

## 追加が必要な依存関係

### shadcn/ui関連
```bash
# 必須パッケージ
- @radix-ui/react-*      # UIプリミティブ（各コンポーネントに応じて）
- class-variance-authority # クラス管理ユーティリティ
- clsx                    # クラス名結合ユーティリティ
- tailwind-merge         # Tailwindクラス競合解決
- lucide-react           # アイコンライブラリ
```

### 機能実装に必要なパッケージ
```bash
# コピー機能
- navigator.clipboard API（標準API使用）

# ローカルストレージ管理（オプション）
- React hooks（カスタムフック作成）

# マークダウン処理（コンテンツがMD形式の場合）
- gray-matter            # フロントマター解析
- remark                # Markdown処理
- rehype                # HTML処理
```

## shadcn/ui導入計画

### 必須コンポーネント
1. **Button** - 基本的なボタン、リンク
2. **Card** - コンテンツ表示、プロンプト表示
3. **Toast** - コピー成功通知
4. **Sheet** - モバイルサイドバー

### オプションコンポーネント
5. **Accordion** - FAQ、折りたたみコンテンツ
6. **Badge** - ラベル表示
7. **Checkbox** - チェックリスト（必要に応じて）
8. **Separator** - セクション区切り

## 依存関係の管理方針

### バージョン管理
- **React/Next.js**: 最新安定版を維持
- **shadcn/ui**: コンポーネント単位で必要時に追加
- **その他**: セキュリティアップデートを優先

### バンドルサイズの考慮
- 必要なコンポーネントのみインポート
- tree-shakingを活用
- 動的インポートの検討（重いコンポーネント）

### 互換性の確認事項
- React 19との互換性
- Next.js 15 App Routerとの整合性
- Tailwind CSS v4との統合

## 既存プロジェクトとの統合

### モノリポ構成での考慮事項
- `/web/pbl-guidebook`は独立したNext.jsアプリ
- 親ディレクトリとの依存関係なし
- Vercelデプロイ設定済み（`vercel.json`）

### 開発環境のセットアップ手順
1. shadcn/ui CLIのインストール
2. shadcn/ui初期設定（`components.json`作成）
3. 必要なコンポーネントの順次追加
4. カスタムコンポーネントの作成

## リスクと対策

### 技術的リスク
- **React 19の新機能**: 十分なテストが必要
- **Tailwind v4**: 一部プラグインの互換性確認
- **shadcn/ui**: 最新版との互換性確認

### 対策
- 段階的な実装とテスト
- コンポーネント単位での動作確認
- Storybookの導入検討（コンポーネント開発用）