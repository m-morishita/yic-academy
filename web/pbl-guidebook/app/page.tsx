import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Users, Lightbulb, Rocket } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ヒーローセクション */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            PBLフェーズ①ガイドブック
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            困りごとを見つけて、ペルソナを作る実践ガイド
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            AIを活用して、効率的にPBLフェーズ①「現状（困りごとを見つける）」を進めましょう
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/theory">
              <Button size="lg" className="gap-2">
                まずは理論編から <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/practice/step1">
              <Button size="lg" variant="outline" className="gap-2">
                実践編へジャンプ <Rocket className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 概要説明セクション */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">このガイドブックについて</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">対象者</h3>
                <p className="text-sm text-muted-foreground">
                  学生から社会人まで、AIリテラシーが低い方でも安心
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">目的</h3>
                <p className="text-sm text-muted-foreground">
                  具体的な困りごとを発見し、リアルなペルソナを作成
                </p>
              </div>
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">特徴</h3>
                <p className="text-sm text-muted-foreground">
                  AIプロンプト付きで、30分で成果物が作れる
                </p>
              </div>
            </div>

            <div className="bg-muted/50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">PBLフェーズ①とは？</h3>
              <p className="text-muted-foreground mb-4">
                PBL（Project Based Learning）のフェーズ①「現状（困りごとを見つける）」は、
                プロジェクトの出発点となる重要なステップです。
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>身近な困りごとから始めることで、具体的で実現可能な課題を設定</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>N=1の具体的なペルソナを作ることで、解決策の解像度を高める</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>チーム全員が共感できる課題を選ぶことで、モチベーションを維持</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ナビゲーションカード */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">コンテンツ</h2>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* 理論編カード */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  理論編
                </CardTitle>
                <CardDescription>
                  まずは基本的な考え方を理解しよう
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                  <li>• なぜ困りごとから始めるのか</li>
                  <li>• N=1思考の重要性</li>
                  <li>• ペルソナ思考の基礎</li>
                </ul>
                <Link href="/theory">
                  <Button variant="secondary" className="w-full">
                    理論編を読む
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* 実践編カード */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Rocket className="h-5 w-5" />
                  実践編
                </CardTitle>
                <CardDescription>
                  4つのステップで実際に作ってみよう
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                  <li>• Step1: 困りごとを見つける</li>
                  <li>• Step2: ペルソナを作る</li>
                  <li>• Step3: チームで選ぶ</li>
                  <li>• Step4: 深掘りする</li>
                </ul>
                <Link href="/practice/step1">
                  <Button variant="secondary" className="w-full">
                    実践編を始める
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* ツールボックスカード */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="h-5 w-5" />
                  ツールボックス
                </CardTitle>
                <CardDescription>
                  すぐに使える便利なツール集
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                  <li>• AIプロンプト集</li>
                  <li>• テンプレート</li>
                  <li>• チェックリスト</li>
                </ul>
                <Link href="/tools/prompts">
                  <Button variant="secondary" className="w-full">
                    ツールを見る
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA セクション */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">準備はできましたか？</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            ChatGPTまたはClaudeのアカウントを用意して、さっそく始めてみましょう。
            30分で最初の成果物が作れます！
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/theory">
              <Button size="lg">
                理論編から始める
              </Button>
            </Link>
            <Link href="/practice/step1">
              <Button size="lg" variant="outline">
                実践編から始める
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
