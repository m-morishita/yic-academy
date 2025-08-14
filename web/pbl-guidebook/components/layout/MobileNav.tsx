"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { navigationItems } from "@/lib/navigation"

export function MobileNav() {
  const pathname = usePathname()

  return (
    <div className="pb-10">
      <Link href="/" className="flex items-center space-x-2 mb-6">
        <span className="font-bold">PBLフェーズ①ガイドブック</span>
      </Link>
      <nav className="flex flex-col space-y-3">
        {navigationItems.map((item) => (
          <div key={item.title}>
            {item.href ? (
              <Link
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.href ? "text-foreground" : "text-muted-foreground"
                )}
              >
                {item.title}
              </Link>
            ) : (
              <>
                <h4 className="text-sm font-semibold mb-2">{item.title}</h4>
                {item.items && (
                  <div className="ml-4 flex flex-col space-y-2">
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem.title}
                        href={subItem.href || "#"}
                        className={cn(
                          "text-sm transition-colors hover:text-primary",
                          pathname === subItem.href ? "text-foreground" : "text-muted-foreground"
                        )}
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </nav>
    </div>
  )
}