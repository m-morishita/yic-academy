import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CopyButton } from "./CopyButton"
import { Prompt } from "@/types"

interface PromptCardProps {
  prompt: Prompt
}

export function PromptCard({ prompt }: PromptCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-1.5">
            <CardTitle>{prompt.title}</CardTitle>
            <CardDescription>{prompt.description}</CardDescription>
          </div>
          <CopyButton text={prompt.prompt} />
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-lg bg-muted p-4">
          <pre className="whitespace-pre-wrap text-sm">{prompt.prompt}</pre>
        </div>
      </CardContent>
    </Card>
  )
}