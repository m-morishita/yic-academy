export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-16 min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <div className="relative inline-flex">
          <div className="w-16 h-16 bg-primary rounded-full"></div>
          <div className="w-16 h-16 bg-primary rounded-full absolute top-0 left-0 animate-ping"></div>
          <div className="w-16 h-16 bg-primary rounded-full absolute top-0 left-0 animate-pulse"></div>
        </div>
        <p className="mt-4 text-muted-foreground">読み込み中...</p>
      </div>
    </div>
  )
}