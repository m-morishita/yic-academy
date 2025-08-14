import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight, Home, FileText, ExternalLink } from "lucide-react"
import { templates } from "@/content/templates"
import { CopyButton } from "@/components/common/CopyButton"

export const metadata: Metadata = {
  title: "テンプレート集 | PBLフェーズ①ガイドブック",
  description: "PBLフェーズ①で使える各種テンプレート・フォーマット集",
}

export default function TemplatesPage() {
  // カテゴリー別にテンプレートをグループ化
  const templatesByCategory = templates.reduce((acc, template) => {
    if (!acc[template.category]) {
      acc[template.category] = []
    }
    acc[template.category].push(template)
    return acc
  }, {} as Record<string, typeof templates>)

  return (
    <div className="container mx-auto px-4 py-8">
      {/* パンくずリスト */}
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground flex items-center gap-1">
          <Home className="h-4 w-4" />
          ホーム
        </Link>
        <ChevronRight className="h-4 w-4" />
        <Link href="/tools/templates" className="hover:text-foreground">
          ツールボックス
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground">テンプレート集</span>
      </nav>

      {/* ページヘッダー */}
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-4">テンプレート集</h1>
        <p className="text-lg text-muted-foreground mb-6">
          PBLフェーズ①の各ステップで使える、便利なテンプレートとフォーマット集です。
          コピーして、GoogleドキュメントやNotionなどでご利用ください。
        </p>
      </header>

      {/* カテゴリー別テンプレート */}
      <div className="space-y-12">
        {Object.entries(templatesByCategory).map(([category, categoryTemplates]) => (
          <section key={category}>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <FileText className="h-6 w-6 text-primary" />
              {category}
            </h2>
            <div className="grid gap-6">
              {categoryTemplates.map((template) => (
                <Card key={template.id} id={template.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle>{template.title}</CardTitle>
                        <CardDescription className="mt-2">
                          {template.description}
                        </CardDescription>
                      </div>
                      {template.url && (
                        <Link href={template.url} target="_blank" rel="noopener noreferrer">
                          <Button size="sm" variant="outline" className="gap-2">
                            <ExternalLink className="h-4 w-4" />
                            外部リンク
                          </Button>
                        </Link>
                      )}
                    </div>
                  </CardHeader>
                  {template.content && (
                    <CardContent>
                      <div className="relative">
                        <div className="bg-muted rounded-lg p-6">
                          <pre className="whitespace-pre-wrap text-sm font-mono overflow-x-auto">
                            {template.content}
                          </pre>
                        </div>
                        <div className="absolute top-2 right-2">
                          <CopyButton text={template.content} />
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-4">
                        ※ コピーボタンをクリックして、お好みのツールに貼り付けてご利用ください
                      </p>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* 使い方のヒント */}
      <section className="mt-16 p-6 bg-muted/50 rounded-lg">
        <h3 className="font-semibold mb-4">テンプレートの活用方法</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium mb-2">おすすめツール</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• Googleドキュメント（共同編集向け）</li>
              <li>• Notion（データベース管理向け）</li>
              <li>• Markdown エディタ（個人作業向け）</li>
              <li>• miro（ビジュアル整理向け）</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">カスタマイズのコツ</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• チームの規模に合わせて項目を調整</li>
              <li>• 不要な項目は削除してシンプルに</li>
              <li>• 必要に応じて独自の項目を追加</li>
              <li>• 定期的にフォーマットを見直し</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 関連リンク */}
      <section className="mt-12 border-t pt-8">
        <h3 className="font-semibold mb-4">関連ページ</h3>
        <div className="flex gap-4 flex-wrap">
          <Link href="/tools/prompts">
            <Button variant="outline">AIプロンプト集</Button>
          </Link>
          <Link href="/tools/checklist">
            <Button variant="outline">チェックリスト</Button>
          </Link>
          <Link href="/practice/step1">
            <Button variant="outline">実践編を始める</Button>
          </Link>
        </div>
      </section>
    </div>
  )
}