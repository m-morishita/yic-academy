'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { AlertCircle, RefreshCw, Home } from 'lucide-react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // エラーをログに記録（本番環境ではエラー追跡サービスに送信）
    console.error(error)
  }, [error])

  return (
    <div className="container mx-auto px-4 py-16 min-h-[80vh] flex items-center justify-center">
      <div className="max-w-md w-full">
        <Card>
          <CardHeader>
            <div className="flex justify-center mb-4">
              <AlertCircle className="h-12 w-12 text-destructive" />
            </div>
            <CardTitle className="text-center">エラーが発生しました</CardTitle>
            <CardDescription className="text-center">
              申し訳ございません。予期しないエラーが発生しました。
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground">
                エラーメッセージ: {error.message || "不明なエラー"}
              </p>
              {error.digest && (
                <p className="text-xs text-muted-foreground mt-2">
                  エラーID: {error.digest}
                </p>
              )}
            </div>
            
            <div className="flex flex-col gap-3">
              <Button
                onClick={() => reset()}
                className="w-full gap-2"
              >
                <RefreshCw className="h-4 w-4" />
                再試行
              </Button>
              <Link href="/">
                <Button variant="outline" className="w-full gap-2">
                  <Home className="h-4 w-4" />
                  ホームに戻る
                </Button>
              </Link>
            </div>

            <div className="text-center text-sm text-muted-foreground">
              <p>問題が解決しない場合は、以下をお試しください：</p>
              <ul className="mt-2 space-y-1">
                <li>• ページを再読み込み（F5 または Cmd+R）</li>
                <li>• ブラウザのキャッシュをクリア</li>
                <li>• 時間をおいて再度アクセス</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}