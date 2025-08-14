import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, ChevronRight, Home, Clock, Target } from "lucide-react"
import { practiceStep1Content } from "@/content/guide/practice-step1"
import { CopyButton } from "@/components/common/CopyButton"

export const metadata: Metadata = {
  title: "Step1: 困りごとを見つける | PBLフェーズ①ガイドブック",
  description: "AIを活用して自分の周りにある困りごとを効率的に発見します",
}

export default function PracticeStep1Page() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* パンくずリスト */}
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground flex items-center gap-1">
          <Home className="h-4 w-4" />
          ホーム
        </Link>
        <ChevronRight className="h-4 w-4" />
        <Link href="/practice/step1" className="hover:text-foreground">
          実践編
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground">Step1</span>
      </nav>

      {/* ページヘッダー */}
      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold">
            1
          </div>
          <h1 className="text-4xl font-bold">{practiceStep1Content.title}</h1>
        </div>
        <div className="ml-13 space-y-4">
          <p className="text-lg text-muted-foreground">
            {practiceStep1Content.content}
          </p>
          <div className="flex gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span>所要時間: 30〜45分</span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="h-4 w-4 text-muted-foreground" />
              <span>目標: 10個以上の困りごと</span>
            </div>
          </div>
        </div>
      </header>

      {/* コンテンツセクション */}
      <div className="space-y-12">
        {practiceStep1Content.subsections?.map((section) => (
          <section key={section.id} className="scroll-mt-20" id={section.id}>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">{section.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-lg max-w-none dark:prose-invert">
                  {formatContentWithPrompts(section.content)}
                </div>
              </CardContent>
            </Card>
          </section>
        ))}
      </div>

      {/* ステップナビゲーション */}
      <section className="mt-16 border-t pt-8">
        <div className="flex justify-between items-center">
          <Link href="/theory">
            <Button variant="outline">
              ← 理論編に戻る
            </Button>
          </Link>
          <Link href="/practice/step2">
            <Button className="gap-2">
              Step2: ペルソナを作る <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* クイックアクセス */}
      <section className="mt-12 p-6 bg-muted/50 rounded-lg">
        <h3 className="font-semibold mb-4">関連リソース</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/tools/prompts">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="pb-3">
                <CardTitle className="text-base">AIプロンプト集</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  すぐに使えるプロンプトテンプレート
                </p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/tools/templates">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="pb-3">
                <CardTitle className="text-base">テンプレート</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  困りごと整理シート
                </p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/tools/checklist">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="pb-3">
                <CardTitle className="text-base">チェックリスト</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Step1の進捗確認
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  )
}

// コンテンツをフォーマットし、プロンプトにコピーボタンを追加
function formatContentWithPrompts(content: string) {
  const lines = content.split('\n')
  const elements: React.ReactElement[] = []
  let currentBlock: string[] = []
  let isInCodeBlock = false
  let blockIndex = 0

  lines.forEach((line) => {
    if (line.startsWith('```')) {
      if (isInCodeBlock) {
        // コードブロックの終了
        const promptText = currentBlock.join('\n')
        elements.push(
          <div key={`code-${blockIndex++}`} className="relative my-6">
            <div className="bg-muted rounded-lg p-4">
              <pre className="whitespace-pre-wrap text-sm overflow-x-auto">
                <code>{promptText}</code>
              </pre>
            </div>
            <div className="absolute top-2 right-2">
              <CopyButton text={promptText} />
            </div>
          </div>
        )
        currentBlock = []
        isInCodeBlock = false
      } else {
        // コードブロックの開始
        isInCodeBlock = true
      }
    } else if (isInCodeBlock) {
      currentBlock.push(line)
    } else {
      // 通常のテキスト処理
      const formatted = line
        .replace(/^### (.*?)$/gm, '<h3 class="text-xl font-semibold mt-6 mb-3">$1</h3>')
        .replace(/^## (.*?)$/gm, '<h2 class="text-2xl font-bold mt-8 mb-4">$1</h2>')
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/^- (.*?)$/gm, '<li class="ml-4">• $1</li>')
        .replace(/^(\d+)\. (.*?)$/gm, '<li class="ml-4 list-decimal">$2</li>')
        .replace(/⭕/g, '<span class="text-green-500">⭕</span>')
        .replace(/❌/g, '<span class="text-red-500">❌</span>')
      
      if (formatted) {
        elements.push(
          <div 
            key={`text-${blockIndex++}`} 
            dangerouslySetInnerHTML={{ __html: formatted }}
            className="mb-4"
          />
        )
      }
    }
  })

  return <>{elements}</>
}