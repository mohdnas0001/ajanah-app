export default function Footer() { 
    return (
      <footer className="py-4 text-center bg-sidebar">
        <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
          <div className="flex items-center justify-center w-4 h-4 rounded-full bg-primary">
            <span className="text-xs text-primary-foreground">✓</span>
          </div>
          <span className="font-neue-regrade">Ajanah Events. All rights reserved.</span>
        </div>
      </footer>
    )
}