import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight, Home, HelpCircle, MessageCircle } from "lucide-react"
import { faqItems } from "@/content/faq"

export const metadata: Metadata = {
  title: "よくある質問 | PBLフェーズ①ガイドブック",
  description: "PBLフェーズ①に関するよくある質問と回答",
}

export default function FAQPage() {
  // カテゴリー別にFAQをグループ化
  const faqByCategory = faqItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = []
    }
    acc[item.category].push(item)
    return acc
  }, {} as Record<string, typeof faqItems>)

  return (
    <div className="container mx-auto px-4 py-8">
      {/* パンくずリスト */}
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground flex items-center gap-1">
          <Home className="h-4 w-4" />
          ホーム
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground">よくある質問</span>
      </nav>

      {/* ページヘッダー */}
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-4">よくある質問（FAQ）</h1>
        <p className="text-lg text-muted-foreground">
          PBLフェーズ①について、よく寄せられる質問をまとめました。
          わからないことがあれば、まずはこちらをご確認ください。
        </p>
      </header>

      {/* カテゴリー別FAQ */}
      <div className="space-y-12">
        {Object.entries(faqByCategory).map(([category, items]) => (
          <section key={category} id={category.toLowerCase()}>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <MessageCircle className="h-6 w-6 text-primary" />
              {category}
            </h2>
            <div className="space-y-4">
              {items.map((item) => (
                <Card key={item.id}>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-start gap-2">
                      <HelpCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{item.question}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.answer}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* 追加の質問 */}
      <Card className="mt-12 bg-primary/5 border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <HelpCircle className="h-5 w-5" />
            質問が見つからない場合
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            お探しの質問が見つからない場合は、以下のページも参考にしてください：
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link href="/troubleshooting">
              <Button variant="outline">トラブルシューティング</Button>
            </Link>
            <Link href="/practice/step1">
              <Button variant="outline">実践編を見る</Button>
            </Link>
            <Link href="/theory">
              <Button variant="outline">理論編を読む</Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* クイックナビゲーション */}
      <section className="mt-16 p-6 bg-muted/50 rounded-lg">
        <h3 className="font-semibold mb-4">カテゴリー別質問</h3>
        <nav className="grid md:grid-cols-2 gap-4">
          {Object.entries(faqByCategory).map(([category, items]) => (
            <div key={category}>
              <a
                href={`#${category.toLowerCase()}`}
                className="font-medium text-sm hover:text-primary transition-colors"
              >
                {category}
              </a>
              <p className="text-xs text-muted-foreground mt-1">
                {items.length}件の質問
              </p>
            </div>
          ))}
        </nav>
      </section>

      {/* ヒント */}
      <section className="mt-12 border-t pt-8">
        <div className="bg-muted/50 rounded-lg p-6">
          <h3 className="font-semibold mb-3">💡 ヒント</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• ブラウザの検索機能（Ctrl+F / Cmd+F）を使うと、キーワードで質問を探せます</li>
            <li>• 質問を読んでもわからない場合は、実際に手を動かしてみることをお勧めします</li>
            <li>• チームメンバーと一緒に確認すると、理解が深まります</li>
          </ul>
        </div>
      </section>
    </div>
  )
}