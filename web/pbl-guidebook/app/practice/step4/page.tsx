import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, ChevronRight, Home, Clock, Lightbulb, CheckCircle } from "lucide-react"
import { practiceStep4Content } from "@/content/guide/practice-step4"
import { CopyButton } from "@/components/common/CopyButton"

export const metadata: Metadata = {
  title: "Step4: 深掘りする | PBLフェーズ①ガイドブック",
  description: "選んだ困りごとを多角的に分析し、解決策のアイデアを出します",
}

export default function PracticeStep4Page() {
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
        <span className="text-foreground">Step4</span>
      </nav>

      {/* ページヘッダー */}
      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold">
            4
          </div>
          <h1 className="text-4xl font-bold">{practiceStep4Content.title}</h1>
        </div>
        <div className="ml-13 space-y-4">
          <p className="text-lg text-muted-foreground">
            {practiceStep4Content.content}
          </p>
          <div className="flex gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span>所要時間: 60〜90分</span>
            </div>
            <div className="flex items-center gap-2">
              <Lightbulb className="h-4 w-4 text-muted-foreground" />
              <span>目標: 20個以上のアイデア</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
              <span>最終ステップ</span>
            </div>
          </div>
        </div>
      </header>

      {/* コンテンツセクション */}
      <div className="space-y-12">
        {practiceStep4Content.subsections?.map((section) => (
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

      {/* 完了メッセージ */}
      <Card className="mt-12 border-green-500/20 bg-green-500/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-400">
            <CheckCircle className="h-6 w-6" />
            フェーズ①完了おめでとうございます！
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            これでPBLフェーズ①「現状（困りごとを見つける）」が完了しました。
            次のフェーズでは、見つけた困りごとに対する解決策を具体化していきます。
          </p>
          <div className="space-y-3">
            <h4 className="font-semibold">成果物チェック</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                <span>具体的な困りごと（1つ）</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                <span>リアルなペルソナ（5人以上）</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                <span>根本原因の分析結果</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                <span>解決策アイデア（20個以上）</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                <span>TOP3アイデアの詳細検討</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* ステップナビゲーション */}
      <section className="mt-16 border-t pt-8">
        <div className="flex justify-between items-center">
          <Link href="/practice/step3">
            <Button variant="outline">
              ← Step3: チームで選ぶ
            </Button>
          </Link>
          <Link href="/tools/checklist">
            <Button className="gap-2">
              最終チェックリストへ <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* クイックアクセス */}
      <section className="mt-12 p-6 bg-muted/50 rounded-lg">
        <h3 className="font-semibold mb-4">関連リソース</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/tools/prompts#analysis">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="pb-3">
                <CardTitle className="text-base">分析プロンプト</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  根本原因と影響範囲の分析
                </p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/tools/templates#idea-evaluation">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="pb-3">
                <CardTitle className="text-base">アイデア評価マトリクス</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  解決策の評価テンプレート
                </p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/tools/checklist#quality">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="pb-3">
                <CardTitle className="text-base">品質チェック</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  最終成果物の確認
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
        const isVisualBlock = promptText.includes('↑') || promptText.includes('│') || promptText.includes('──')
        
        elements.push(
          <div key={`code-${blockIndex++}`} className="relative my-6">
            <div className="bg-muted rounded-lg p-4">
              <pre className="whitespace-pre-wrap text-sm overflow-x-auto font-mono">
                <code>{promptText}</code>
              </pre>
            </div>
            {!isVisualBlock && (
              <div className="absolute top-2 right-2">
                <CopyButton text={promptText} />
              </div>
            )}
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