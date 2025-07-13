import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import useTheme from "../hooks/useTheme";
import { Button } from "./ui/button";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <Button
      variant="ghost"
      size="sm"
      aria-label="Toggle theme"
      className="text-foreground hover:text-brand transition-colors"
      onClick={toggle}
    >
      {theme === "light" ? (
        <MoonIcon className="w-4 h-4" />
      ) : (
        <SunIcon className="w-4 h-4" />
      )}
    </Button>
  );
}
