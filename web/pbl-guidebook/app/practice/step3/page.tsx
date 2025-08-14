import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, ChevronRight, Home, Clock, Users, Layout } from "lucide-react"
import { practiceStep3Content } from "@/content/guide/practice-step3"
import { CopyButton } from "@/components/common/CopyButton"

export const metadata: Metadata = {
  title: "Step3: チームで選ぶ | PBLフェーズ①ガイドブック",
  description: "miroを使って困りごとを共有し、チーム全員で1つを選びます",
}

export default function PracticeStep3Page() {
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
        <span className="text-foreground">Step3</span>
      </nav>

      {/* ページヘッダー */}
      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold">
            3
          </div>
          <h1 className="text-4xl font-bold">{practiceStep3Content.title}</h1>
        </div>
        <div className="ml-13 space-y-4">
          <p className="text-lg text-muted-foreground">
            {practiceStep3Content.content}
          </p>
          <div className="flex gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span>所要時間: 60〜90分</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-muted-foreground" />
              <span>チーム作業</span>
            </div>
            <div className="flex items-center gap-2">
              <Layout className="h-4 w-4 text-muted-foreground" />
              <span>miro使用</span>
            </div>
          </div>
        </div>
      </header>

      {/* 準備チェックリスト */}
      <Card className="mb-8 border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle className="text-lg">事前準備チェック</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span>各メンバーが困りごとTOP3を準備済み</span>
            </li>
            <li className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span>各メンバーがペルソナを作成済み</span>
            </li>
            <li className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span>miroアカウントの準備完了</span>
            </li>
            <li className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span>チーム全員の時間確保（60〜90分）</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* コンテンツセクション */}
      <div className="space-y-12">
        {practiceStep3Content.subsections?.map((section) => (
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
          <Link href="/practice/step2">
            <Button variant="outline">
              ← Step2: ペルソナを作る
            </Button>
          </Link>
          <Link href="/practice/step4">
            <Button className="gap-2">
              Step4: 深掘りする <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* クイックアクセス */}
      <section className="mt-12 p-6 bg-muted/50 rounded-lg">
        <h3 className="font-semibold mb-4">関連リソース</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/tools/templates#team-decision">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="pb-3">
                <CardTitle className="text-base">チーム意思決定シート</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  チームで使える決定記録テンプレート
                </p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/tools/templates#miro-template">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="pb-3">
                <CardTitle className="text-base">miroテンプレート</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  推奨ボードレイアウト
                </p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/tools/checklist#step3">
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader className="pb-3">
                <CardTitle className="text-base">チェックリスト</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Step3の進捗確認
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
            {!promptText.includes('┌─') && !promptText.includes('│') && (
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