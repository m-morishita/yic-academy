import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, Home, Search } from "lucide-react"
import { prompts } from "@/content/prompts"
import { PromptCard } from "@/components/common/PromptCard"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "AIプロンプト集 | PBLフェーズ①ガイドブック",
  description: "PBLフェーズ①で使える便利なAIプロンプトテンプレート集",
}

export default function PromptsPage() {
  // カテゴリー別にプロンプトをグループ化
  const promptsByCategory = prompts.reduce((acc, prompt) => {
    if (!acc[prompt.category]) {
      acc[prompt.category] = []
    }
    acc[prompt.category].push(prompt)
    return acc
  }, {} as Record<string, typeof prompts>)

  return (
    <div className="container mx-auto px-4 py-8">
      {/* パンくずリスト */}
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground flex items-center gap-1">
          <Home className="h-4 w-4" />
          ホーム
        </Link>
        <ChevronRight className="h-4 w-4" />
        <Link href="/tools/prompts" className="hover:text-foreground">
          ツールボックス
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground">AIプロンプト集</span>
      </nav>

      {/* ページヘッダー */}
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-4">AIプロンプト集</h1>
        <p className="text-lg text-muted-foreground mb-6">
          PBLフェーズ①の各ステップで使える、コピペ可能なAIプロンプトテンプレート集です。
          ChatGPTとClaudeの両方で動作確認済みです。
        </p>
        
        {/* 使い方説明 */}
        <Card className="bg-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle className="text-lg">プロンプトの使い方</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <p>1. 使いたいプロンプトの「コピー」ボタンをクリック</p>
            <p>2. ChatGPTまたはClaudeに貼り付け</p>
            <p>3. [  ]内の変数部分を自分の内容に置き換え</p>
            <p>4. 送信して結果を確認</p>
            <p className="text-muted-foreground pt-2">
              ※ より良い結果を得るには、具体的な情報を入力してください
            </p>
          </CardContent>
        </Card>
      </header>

      {/* カテゴリー別プロンプト */}
      <div className="space-y-12">
        {Object.entries(promptsByCategory).map(([category, categoryPrompts]) => (
          <section key={category} id={category.toLowerCase().replace(/[・\s]/g, '-')}>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Search className="h-6 w-6 text-primary" />
              {category}
            </h2>
            <div className="grid gap-6">
              {categoryPrompts.map((prompt) => (
                <PromptCard key={prompt.id} prompt={prompt} />
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* クイックナビゲーション */}
      <section className="mt-16 p-6 bg-muted/50 rounded-lg">
        <h3 className="font-semibold mb-4">カテゴリー一覧</h3>
        <nav className="grid md:grid-cols-2 gap-2">
          {Object.keys(promptsByCategory).map((category) => (
            <a
              key={category}
              href={`#${category.toLowerCase().replace(/[・\s]/g, '-')}`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              • {category} ({promptsByCategory[category].length}個)
            </a>
          ))}
        </nav>
      </section>

      {/* 関連リンク */}
      <section className="mt-12 border-t pt-8">
        <h3 className="font-semibold mb-4">関連ページ</h3>
        <div className="flex gap-4 flex-wrap">
          <Link href="/practice/step1">
            <Button variant="outline">実践編Step1</Button>
          </Link>
          <Link href="/practice/step2">
            <Button variant="outline">実践編Step2</Button>
          </Link>
          <Link href="/tools/templates">
            <Button variant="outline">テンプレート集</Button>
          </Link>
          <Link href="/tools/checklist">
            <Button variant="outline">チェックリスト</Button>
          </Link>
        </div>
      </section>
    </div>
  )
}