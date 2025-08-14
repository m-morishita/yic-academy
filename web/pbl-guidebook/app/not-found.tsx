import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, Search, FileQuestion, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16 min-h-[80vh] flex items-center justify-center">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <FileQuestion className="h-24 w-24 text-muted-foreground" />
          </div>
          <h1 className="text-4xl font-bold mb-2">404 - ページが見つかりません</h1>
          <p className="text-lg text-muted-foreground">
            お探しのページは存在しないか、移動した可能性があります。
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>ページを探す</CardTitle>
            <CardDescription>
              以下のリンクから目的のページを見つけてください
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-3">
              <Link href="/">
                <Button variant="outline" className="w-full justify-start gap-2">
                  <Home className="h-4 w-4" />
                  ホームページへ戻る
                </Button>
              </Link>
              <Link href="/theory">
                <Button variant="outline" className="w-full justify-start gap-2">
                  <Search className="h-4 w-4" />
                  理論編を読む
                </Button>
              </Link>
              <Link href="/practice/step1">
                <Button variant="outline" className="w-full justify-start gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  実践編を始める
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* サイトマップ */}
        <div className="mt-8 p-6 bg-muted/50 rounded-lg">
          <h2 className="font-semibold mb-4">サイトマップ</h2>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h3 className="font-medium mb-2">学習コンテンツ</h3>
              <ul className="space-y-1 text-muted-foreground">
                <li>
                  <Link href="/theory" className="hover:text-foreground">
                    • 理論編
                  </Link>
                </li>
                <li>
                  <Link href="/practice/step1" className="hover:text-foreground">
                    • 実践編 Step1
                  </Link>
                </li>
                <li>
                  <Link href="/practice/step2" className="hover:text-foreground">
                    • 実践編 Step2
                  </Link>
                </li>
                <li>
                  <Link href="/practice/step3" className="hover:text-foreground">
                    • 実践編 Step3
                  </Link>
                </li>
                <li>
                  <Link href="/practice/step4" className="hover:text-foreground">
                    • 実践編 Step4
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-2">ツール・サポート</h3>
              <ul className="space-y-1 text-muted-foreground">
                <li>
                  <Link href="/tools/prompts" className="hover:text-foreground">
                    • AIプロンプト集
                  </Link>
                </li>
                <li>
                  <Link href="/tools/templates" className="hover:text-foreground">
                    • テンプレート
                  </Link>
                </li>
                <li>
                  <Link href="/tools/checklist" className="hover:text-foreground">
                    • チェックリスト
                  </Link>
                </li>
                <li>
                  <Link href="/troubleshooting" className="hover:text-foreground">
                    • トラブルシューティング
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-foreground">
                    • よくある質問
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}