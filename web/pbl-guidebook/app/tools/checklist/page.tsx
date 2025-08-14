"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight, Home, CheckSquare, RotateCcw } from "lucide-react"
import { checklistItems } from "@/content/checklist"

// export const metadata: Metadata = {
//   title: "チェックリスト | PBLフェーズ①ガイドブック",
//   description: "PBLフェーズ①の進捗確認用チェックリスト",
// }

export default function ChecklistPage() {
  // チェック状態の管理
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({})

  // カテゴリー別にチェックリストをグループ化
  const itemsByCategory = checklistItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = []
    }
    acc[item.category].push(item)
    return acc
  }, {} as Record<string, typeof checklistItems>)

  // チェック状態の切り替え
  const toggleCheck = (itemId: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }))
  }

  // 全てリセット
  const resetAll = () => {
    setCheckedItems({})
  }

  // カテゴリー別の進捗計算
  const getCategoryProgress = (category: string) => {
    const items = itemsByCategory[category]
    const checkedCount = items.filter(item => checkedItems[item.id]).length
    return {
      checked: checkedCount,
      total: items.length,
      percentage: Math.round((checkedCount / items.length) * 100)
    }
  }

  // 全体の進捗計算
  const getTotalProgress = () => {
    const checkedCount = Object.values(checkedItems).filter(Boolean).length
    const totalCount = checklistItems.length
    return {
      checked: checkedCount,
      total: totalCount,
      percentage: Math.round((checkedCount / totalCount) * 100)
    }
  }

  const totalProgress = getTotalProgress()

  return (
    <div className="container mx-auto px-4 py-8">
      {/* パンくずリスト */}
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground flex items-center gap-1">
          <Home className="h-4 w-4" />
          ホーム
        </Link>
        <ChevronRight className="h-4 w-4" />
        <Link href="/tools/checklist" className="hover:text-foreground">
          ツールボックス
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground">チェックリスト</span>
      </nav>

      {/* ページヘッダー */}
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-4">チェックリスト</h1>
        <p className="text-lg text-muted-foreground mb-6">
          PBLフェーズ①の各ステップで確認すべき項目をチェックしましょう。
          進捗状況を可視化して、漏れなく作業を進められます。
        </p>

        {/* 全体進捗 */}
        <Card className="bg-primary/5 border-primary/20">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">全体進捗</CardTitle>
              <Button onClick={resetAll} variant="outline" size="sm" className="gap-2">
                <RotateCcw className="h-4 w-4" />
                リセット
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>{totalProgress.checked} / {totalProgress.total} 完了</span>
                <span className="font-bold">{totalProgress.percentage}%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div 
                  className="bg-primary h-2 rounded-full transition-all duration-300"
                  style={{ width: `${totalProgress.percentage}%` }}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </header>

      {/* カテゴリー別チェックリスト */}
      <div className="space-y-8">
        {Object.entries(itemsByCategory).map(([category, items]) => {
          const progress = getCategoryProgress(category)
          
          return (
            <Card key={category} id={category.toLowerCase().replace(/[\s:]/g, '-')}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <CheckSquare className="h-5 w-5 text-primary" />
                    {category}
                  </CardTitle>
                  <div className="text-sm text-muted-foreground">
                    {progress.checked} / {progress.total} ({progress.percentage}%)
                  </div>
                </div>
                <div className="w-full bg-muted rounded-full h-2 mt-2">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all duration-300"
                    style={{ width: `${progress.percentage}%` }}
                  />
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {items.map((item) => (
                    <li key={item.id}>
                      <label className="flex items-start gap-3 cursor-pointer hover:bg-muted/50 p-2 rounded-lg transition-colors">
                        <input
                          type="checkbox"
                          checked={checkedItems[item.id] || false}
                          onChange={() => toggleCheck(item.id)}
                          className="mt-0.5"
                        />
                        <span className={`text-sm ${checkedItems[item.id] ? 'line-through text-muted-foreground' : ''}`}>
                          {item.text}
                        </span>
                      </label>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* 完了メッセージ */}
      {totalProgress.percentage === 100 && (
        <Card className="mt-12 border-green-500/20 bg-green-500/5">
          <CardHeader>
            <CardTitle className="text-green-700 dark:text-green-400">
              🎉 すべてのチェック項目が完了しました！
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              PBLフェーズ①の全ての項目を確認できました。
              次のフェーズに進む準備が整っています。
            </p>
          </CardContent>
        </Card>
      )}

      {/* 使い方のヒント */}
      <section className="mt-16 p-6 bg-muted/50 rounded-lg">
        <h3 className="font-semibold mb-4">チェックリストの活用方法</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium mb-2">効果的な使い方</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• 各ステップの開始前に項目を確認</li>
              <li>• 作業完了後にチェックを付ける</li>
              <li>• チーム全体で進捗を共有</li>
              <li>• 定期的に振り返りを実施</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">注意点</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• チェックは正直に付ける</li>
              <li>• 不明な項目は飛ばさずに確認</li>
              <li>• 品質を優先（急がない）</li>
              <li>• ブラウザを閉じると状態はリセット</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 関連リンク */}
      <section className="mt-12 border-t pt-8">
        <h3 className="font-semibold mb-4">関連ページ</h3>
        <div className="flex gap-4 flex-wrap">
          <Link href="/practice/step1">
            <Button variant="outline">Step1: 困りごとを見つける</Button>
          </Link>
          <Link href="/practice/step2">
            <Button variant="outline">Step2: ペルソナを作る</Button>
          </Link>
          <Link href="/practice/step3">
            <Button variant="outline">Step3: チームで選ぶ</Button>
          </Link>
          <Link href="/practice/step4">
            <Button variant="outline">Step4: 深掘りする</Button>
          </Link>
        </div>
      </section>
    </div>
  )
}