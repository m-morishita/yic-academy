# YIC Academy - PBL教育プログラム

## 📚 概要

山口情報センター（YIC）のPBL（Project Based Learning）教育プログラムのリポジトリです。  
AIを活用した問題発見手法と実践的な課題解決スキルを学ぶための教材とツールを提供しています。

## 🎯 プロジェクト構成

### 📁 ディレクトリ構造

```
academy/
├── .claude/                     # Claude Code要件定義
│   ├── requirements/            # プロジェクト要件
│   └── requirements_src/        # 実装仕様書
├── web/
│   └── pbl-guidebook/          # PBLフェーズ①ガイドブックWebサイト
├── PBLの流れ/                   # PBLプロセスドキュメント
├── ボット/                      # AIボット関連
└── 各チーム/                    # チーム別作業
```

## 🚀 PBLフェーズ①ガイドブック

### 特徴
- **理論編・実践編**: ステップバイステップで学べる構造化されたコンテンツ
- **AIプロンプト集**: ChatGPT/Claude用のコピペ可能な10種類以上のプロンプト
- **インタラクティブなチェックリスト**: 進捗を可視化しながら作業を進められる
- **テンプレート集**: 困りごと整理シート、ペルソナシートなど5種類
- **トラブルシューティング**: よくある7つの問題と解決方法

### アクセス方法

#### ローカル開発
```bash
cd web/pbl-guidebook
npm install
npm run dev
```

ブラウザで http://localhost:3000 を開く

#### プロダクションビルド
```bash
cd web/pbl-guidebook
npm run build
npm start
```

### 技術スタック
- **Next.js 15.4.6** (App Router)
- **TypeScript 5**
- **Tailwind CSS v4**
- **shadcn/ui components**

## 📝 ドキュメント

### PBLの流れ
- フェーズ①: 現状（困りごとを見つける）
- フェーズ②: あるべき姿を考える
- フェーズ③: 解決策を考える
- フェーズ④: 実装する

### 主な教材
1. **理論編**: PBLの基礎知識と重要性
2. **実践編**: 4つのステップで進める具体的な手順
   - Step1: 困りごとを見つける
   - Step2: ペルソナを作る
   - Step3: チームで選ぶ
   - Step4: 深掘りする
3. **ツールボックス**: AIプロンプト、テンプレート、チェックリスト

## 🛠 開発

### 要件定義管理
`.claude/`ディレクトリでClaude Codeを使用した要件定義を管理しています。

### コントリビューション
1. Issueを作成して議論
2. Feature branchを作成
3. 変更をコミット
4. Pull Requestを作成
5. コードレビュー後マージ

## 📄 ライセンス

このプロジェクトは教育目的のプライベートプロジェクトです。

## 🤝 お問い合わせ

山口情報センター（YIC）アカデミー事業部

---

🤖 Generated with [Claude Code](https://claude.ai/code)