import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, ChevronRight, Home } from "lucide-react"
import { theoryContent } from "@/content/guide/theory"

export const metadata: Metadata = {
  title: "理論編 | PBLフェーズ①ガイドブック",
  description: "なぜ困りごとから始めるのか、ペルソナ思考の基礎を学ぶ",
}

export default function TheoryPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* パンくずリスト */}
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground flex items-center gap-1">
          <Home className="h-4 w-4" />
          ホーム
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground">理論編</span>
      </nav>

      {/* ページタイトル */}
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-4">{theoryContent.title}</h1>
        <p className="text-lg text-muted-foreground">
          PBLフェーズ①の基本的な考え方を理解しましょう。
          理論を理解することで、実践編がより効果的に進められます。
        </p>
      </header>

      {/* コンテンツセクション */}
      <div className="space-y-16">
        {theoryContent.subsections?.map((section, index) => (
          <section key={section.id} className="scroll-mt-20" id={section.id}>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">
                  {index + 1}. {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div 
                  className="prose prose-lg max-w-none dark:prose-invert"
                  dangerouslySetInnerHTML={{ __html: formatContent(section.content) }}
                />
              </CardContent>
            </Card>
          </section>
        ))}
      </div>

      {/* ネクストステップ */}
      <section className="mt-16 border-t pt-8">
        <h2 className="text-2xl font-bold mb-6">次のステップ</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>実践編を始める</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                理論を理解したら、実際に手を動かして困りごとを見つけてみましょう。
                AIプロンプトを使って、30分で最初の成果物が作れます。
              </p>
              <Link href="/practice/step1">
                <Button className="w-full gap-2">
                  Step1: 困りごとを見つける <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>ツールを確認する</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                実践編で使用するAIプロンプトやテンプレートを事前に確認しておくと、
                よりスムーズに作業を進められます。
              </p>
              <Link href="/tools/prompts">
                <Button variant="outline" className="w-full gap-2">
                  AIプロンプト集を見る <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* クイックナビゲーション */}
      <section className="mt-12 p-6 bg-muted/50 rounded-lg">
        <h3 className="font-semibold mb-4">このページの内容</h3>
        <nav className="grid md:grid-cols-2 gap-2">
          {theoryContent.subsections?.map((section, index) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {index + 1}. {section.title}
            </a>
          ))}
        </nav>
      </section>
    </div>
  )
}

// Markdownライクなコンテンツを簡易的にHTMLに変換
function formatContent(content: string): string {
  return content
    .replace(/^### (.*?)$/gm, '<h3 class="text-xl font-semibold mt-6 mb-3">$1</h3>')
    .replace(/^## (.*?)$/gm, '<h2 class="text-2xl font-bold mt-8 mb-4">$1</h2>')
    .replace(/^# (.*?)$/gm, '<h1 class="text-3xl font-bold mt-8 mb-4">$1</h1>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/^- (.*?)$/gm, '<li class="ml-4">$1</li>')
    .replace(/^(\d+)\. (.*?)$/gm, '<li class="ml-4 list-decimal">$2</li>')
    .replace(/❌/g, '<span class="text-red-500">❌</span>')
    .replace(/⭕/g, '<span class="text-green-500">⭕</span>')
    .replace(/\n\n/g, '</p><p class="mb-4">')
    .replace(/^/, '<p class="mb-4">')
    .replace(/$/, '</p>')
}