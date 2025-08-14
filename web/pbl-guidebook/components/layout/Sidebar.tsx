"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { NavigationItem } from "@/types"

interface SidebarProps {
  items: NavigationItem[]
}

export function Sidebar({ items }: SidebarProps) {
  const pathname = usePathname()

  return (
    <nav className="w-full">
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.title}>
            {item.href ? (
              <Link
                href={item.href}
                className={cn(
                  "block rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors",
                  pathname === item.href ? "bg-accent text-accent-foreground" : "text-muted-foreground"
                )}
              >
                {item.title}
              </Link>
            ) : (
              <div className="px-3 py-2">
                <p className="text-sm font-semibold">{item.title}</p>
                {item.items && (
                  <ul className="ml-3 mt-2 space-y-1">
                    {item.items.map((subItem) => (
                      <li key={subItem.title}>
                        <Link
                          href={subItem.href || "#"}
                          className={cn(
                            "block rounded-lg px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors",
                            pathname === subItem.href ? "bg-accent text-accent-foreground" : "text-muted-foreground"
                          )}
                        >
                          {subItem.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}