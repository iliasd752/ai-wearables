import { Button } from "./ui/button";
import ThemeToggle from "./ThemeToggle";
import { SearchIcon, UserIcon, ShoppingCartIcon } from "lucide-react";

export default function Header() {
  return (
    <header className="border-b border-border bg-card">
      <div className="container mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 py-6">
        {/* ─── Title & Subtitle ─── */}
        <div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
            AI Wearables Collection
          </h1>
          <p className="mt-2 text-sm sm:text-base text-muted-foreground max-w-prose">
            Discover and manage the latest AI‑powered wearable devices
          </p>
        </div>

        {/* ─── Action buttons ─── */}
        <div className="flex items-center space-x-2">
          {/* Theme toggle shows on all screens */}
          <ThemeToggle />

          {/* Search / profile / cart – desktop only */}
          <div className="hidden md:flex items-center space-x-2">
            {[
              { Icon: SearchIcon, label: "Search" },
              { Icon: UserIcon, label: "Account" },
              { Icon: ShoppingCartIcon, label: "Cart" },
            ].map(({ Icon, label }) => (
              <Button
                key={label}
                variant="ghost"
                size="sm"
                aria-label={label}
                className="text-foreground hover:text-brand transition-colors"
              >
                <Icon className="w-4 h-4" />
              </Button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
