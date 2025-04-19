"use client";

import { useState, useEffect } from "react";
import { Paintbrush, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { toast } from "sonner";

// Predefined color themes
const colorThemes = [
  {
    name: "Default",
    primary: "oklch(56.75% 0.264 14.49)",
    secondary: "oklch(0.984 0.003 247.858)",
  },
  {
    name: "Lavender",
    primary: "oklch(75.13% 0.128 301.08)",
    secondary: "oklch(0.984 0.003 247.858)",
  },
  {
    name: "Ocean",
    primary: "oklch(51.83% 0.201 240.47)",
    secondary: "oklch(0.984 0.003 247.858)",
  },
  {
    name: "Forest",
    primary: "oklch(49.35% 0.158 148.29)",
    secondary: "oklch(0.984 0.003 247.858)",
  },
  {
    name: "Sunset",
    primary: "oklch(0.645 0.222 41.116)",
    secondary: "oklch(0.984 0.003 247.858)",
  },
  {
    name: "Berry",
    primary: "oklch(39.84% 0.256 351.62)",
    secondary: "oklch(0.984 0.003 247.858)",
  },
  {
    name: "Mint",
    primary: "oklch(60% 0.128 173.12)",
    secondary: "oklch(0.984 0.003 247.858)",
  },
  {
    name: "Mocha",
    primary: "oklch(57.39% 0.089 50.43)",
    secondary: "oklch(0.984 0.003 247.858)",
  },
];

export function ThemeCustomizer() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState("Default");

  // Load saved theme on initial render
  useEffect(() => {
    const savedTheme = localStorage.getItem("linda-salon-theme");
    if (savedTheme) {
      try {
        const theme = JSON.parse(savedTheme);
        setSelectedTheme(theme.name);
        applyTheme(theme.primary, theme.secondary);
      } catch (error) {
        console.error("Failed to parse saved theme:", error);
      }
    }
  }, []);

  const applyTheme = (primary: string, secondary: string) => {
    document.documentElement.style.setProperty("--primary", primary);
    document.documentElement.style.setProperty("--secondary", secondary);

    // Also update ring color to match primary
    document.documentElement.style.setProperty("--ring", primary);
  };

  const handleThemeSelect = (theme: (typeof colorThemes)[0]) => {
    setSelectedTheme(theme.name);
    applyTheme(theme.primary, theme.secondary);

    // Save theme preference
    localStorage.setItem("linda-salon-theme", JSON.stringify(theme));

    toast("Theme updated", {
      description: `Applied the ${theme.name} theme`,
    });
  };

  const resetToDefault = () => {
    const defaultTheme = colorThemes[0];
    setSelectedTheme(defaultTheme.name);
    applyTheme(defaultTheme.primary, defaultTheme.secondary);

    // Save theme preference
    localStorage.setItem("linda-salon-theme", JSON.stringify(defaultTheme));

    toast("Default theme restored", {
      description: "The default theme has been restored",
    });
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="relative">
            <Paintbrush className="h-5 w-5" />
            <span className="sr-only">Customize theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <div className="text-sm font-medium px-2 py-1.5">Color Theme</div>
          {colorThemes.map((theme) => (
            <DropdownMenuItem
              key={theme.name}
              onClick={() => handleThemeSelect(theme)}
              className="flex items-center justify-between"
            >
              <div className="flex items-center">
                <div
                  className="w-4 h-4 rounded-full mr-2"
                  style={{ backgroundColor: `hsl(${theme.primary})` }}
                />
                {theme.name}
              </div>
              {selectedTheme === theme.name && <Check className="h-4 w-4" />}
            </DropdownMenuItem>
          ))}
          <DropdownMenuSeparator />
          <DialogTrigger asChild></DialogTrigger>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={resetToDefault}>
            Reset to Default
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </Dialog>
  );
}
