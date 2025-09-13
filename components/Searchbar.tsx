"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { SearchIcon } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

interface SearchBarProps {
    placeholder?: string
    className?: string
    isMobile?: boolean
}

const SearchBar = ({ placeholder = "Search...", className, isMobile }: SearchBarProps) => {
    const [search, setSearch] = useState("")

    return (
        <div className={cn(isMobile ? "flex" : "hidden md:flex", `${className || ""}`)}>
            <Input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={placeholder}
                className="px-3 py-1 border border-border rounded-l-md focus:outline-none focus:ring-1 focus:ring-primary bg-background text-foreground w-full"
            />
            <Button className="px-3 py-1 bg-primary text-primary-foreground rounded-r-md hover:brightness-90">
                <SearchIcon className="w-4 h-4" />
            </Button>
        </div>
    )
}

export default SearchBar