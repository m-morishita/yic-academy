"use client"

import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { MobileNav } from "./MobileNav"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex flex-1">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold text-lg">PBLフェーズ①ガイドブック</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/theory"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              理論編
            </Link>
            <Link
              href="/practice/step1"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              実践編
            </Link>
            <Link
              href="/tools/prompts"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              ツールボックス
            </Link>
            <Link
              href="/troubleshooting"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              トラブルシューティング
            </Link>
            <Link
              href="/faq"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              FAQ
            </Link>
          </nav>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">メニューを開く</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <MobileNav />
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}