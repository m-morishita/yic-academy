import { NavigationItem } from "@/types"

export const navigationItems: NavigationItem[] = [
  { title: "ホーム", href: "/" },
  { title: "理論編", href: "/theory" },
  {
    title: "実践編",
    items: [
      { title: "Step1: 困りごと発見", href: "/practice/step1" },
      { title: "Step2: ペルソナ作成", href: "/practice/step2" },
      { title: "Step3: チーム選定", href: "/practice/step3" },
      { title: "Step4: 深掘り", href: "/practice/step4" },
    ]
  },
  {
    title: "ツールボックス",
    items: [
      { title: "AIプロンプト集", href: "/tools/prompts" },
      { title: "テンプレート", href: "/tools/templates" },
      { title: "チェックリスト", href: "/tools/checklist" },
    ]
  },
  { title: "トラブルシューティング", href: "/troubleshooting" },
  { title: "FAQ", href: "/faq" },
]