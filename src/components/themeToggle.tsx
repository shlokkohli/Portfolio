'use client'
import { useTheme } from "next-themes"
import { FaMoon, FaSun } from "react-icons/fa"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {

    const {theme, setTheme} = useTheme();

    return(
        <Button variant='ghost' size='icon' className="rounded-full h-5 w-5" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
            <FaSun className="absolute h-10 w-10 rotate-0 scale-100 dark:rotate-90 dark:scale-0"></FaSun>
            <FaMoon className="absolute h-10 w-10 rotate-90 scale-0 dark:rotate-0 dark:scale-100"></FaMoon>
        </Button>
    )
}