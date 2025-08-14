import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight, Home, AlertTriangle, CheckCircle, Lightbulb } from "lucide-react"
import { troubleshootingItems } from "@/content/troubleshooting"

export const metadata: Metadata = {
  title: "トラブルシューティング | PBLフェーズ①ガイドブック",
  description: "よくある問題と解決方法をまとめたトラブルシューティングガイド",
}

export default function TroubleshootingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* パンくずリスト */}
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground flex items-center gap-1">
          <Home className="h-4 w-4" />
          ホーム
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground">トラブルシューティング</span>
      </nav>

      {/* ページヘッダー */}
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-4">トラブルシューティング</h1>
        <p className="text-lg text-muted-foreground">
          PBLフェーズ①でよくある問題と、その解決方法をまとめました。
          困った時は、このページを参考にしてください。
        </p>
      </header>

      {/* 注意事項 */}
      <Card className="mb-8 border-amber-500/20 bg-amber-500/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-amber-700 dark:text-amber-400">
            <AlertTriangle className="h-5 w-5" />
            はじめに
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            完璧を求めすぎないことが重要です。最初からうまくいかなくて当たり前。
            試行錯誤しながら進めることで、より良い成果物ができあがります。
          </p>
        </CardContent>
      </Card>

      {/* トラブルシューティング項目 */}
      <div className="space-y-8">
        {troubleshootingItems.map((item) => (
          <Card key={item.id} id={item.id} className="overflow-hidden">
            <CardHeader className="bg-muted/50">
              <CardTitle className="text-xl flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-orange-500" />
                {item.title}
              </CardTitle>
              <CardDescription className="text-base mt-2">
                {item.problem}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                {/* 原因 */}
                <div>
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <span className="text-orange-500">▼</span> 考えられる原因
                  </h3>
                  <ul className="space-y-1 ml-6">
                    {item.causes.map((cause, index) => (
                      <li key={index} className="text-sm text-muted-foreground">
                        • {cause}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 解決策 */}
                <div>
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    解決策
                  </h3>
                  <ul className="space-y-2 ml-6">
                    {item.solutions.map((solution, index) => (
                      <li key={index} className="text-sm flex items-start gap-2">
                        <span className="text-green-500 mt-0.5">✓</span>
                        <span>{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* ヒント */}
                {item.tips && (
                  <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                    <p className="text-sm flex items-start gap-2">
                      <Lightbulb className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{item.tips}</span>
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* クイックナビゲーション */}
      <section className="mt-16 p-6 bg-muted/50 rounded-lg">
        <h3 className="font-semibold mb-4">クイックアクセス</h3>
        <nav className="grid md:grid-cols-2 gap-2">
          {troubleshootingItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              • {item.title}
            </a>
          ))}
        </nav>
      </section>

      {/* 関連リンク */}
      <section className="mt-12 border-t pt-8">
        <h3 className="font-semibold mb-4">さらに困った時は</h3>
        <div className="flex gap-4 flex-wrap">
          <Link href="/faq">
            <Button variant="outline">FAQ を見る</Button>
          </Link>
          <Link href="/practice/step1">
            <Button variant="outline">最初からやり直す</Button>
          </Link>
          <Link href="/tools/checklist">
            <Button variant="outline">チェックリストで確認</Button>
          </Link>
        </div>
      </section>
    </div>
  )
}