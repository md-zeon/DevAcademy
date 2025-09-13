import Link from "next/link"
import { MenuIcon } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"
import { Button } from "../ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger } from "../ui/dropdown-menu"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import SearchBar from "../Searchbar"

const NavbarHome = () => {
  const user = ""

  return (
    <header className="bg-background border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo + Navigation */}
          <div className="flex items-center space-x-4">
            {/* Logo */}
            <Link href="/" className="text-2xl font-bold text-primary">
              DevAcademy
            </Link>
            {/* Desktop Navigation */}
            {/* Navigation Menu */}
            <NavigationMenu>
              <NavigationMenuList className="hidden sm:flex gap-x-2 md:gap-x-1">
                {/* Courses Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="flex items-center gap-1 text-foreground hover:text-primary">
                    Courses
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="w-60 bg-background text-foreground border border-border shadow-md rounded-md p-2 flex flex-col gap-1 z-50">
                    <NavigationMenuLink asChild>
                      <Link
                        href="/courses"
                        className="block px-3 py-2 rounded"
                      >
                        All Courses
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/paths"
                        className="block px-3 py-2 rounded"
                      >
                        Career Paths
                      </Link>
                    </NavigationMenuLink>
                    {/* Future: Add categories dynamically here */}
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Dashboard */}
                {user &&
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/dashboard"
                        className="text-foreground hover:text-primary"
                      >
                        Dashboard
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                }
                {/* About */}
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/about"
                      className="text-foreground hover:text-primary"
                    >
                      About
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* Contact */}
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/contact"
                      className="text-foreground hover:text-primary"
                    >
                      Contact
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right: Search + Auth */}
          <div className="flex items-center space-x-4">
            {/* Desktop Search */}
            <div className="hidden sm:flex items-center">
              <SearchBar placeholder="Search courses..." />
            </div>


            {/* Desktop Auth / Avatar */}
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="start">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      Profile
                      <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      Billing
                      <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      Settings
                      <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    Log out
                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Button asChild variant="ghost" size="lg">
                  <Link
                    href="/login"
                  >
                    Login
                  </Link>
                </Button>
                <Button asChild size="lg">
                  <Link
                    href="/auth/register"
                    className="px-4 py-2 bg-primary text-primary-foreground rounded hover:brightness-90"
                  >
                    Signup
                  </Link>
                </Button>
              </>
            )}

            {/* Mobile Navigation Sheet */}
            <div className="sm:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost">
                    <MenuIcon className="w-6 h-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-64 p-4">
                  <SheetHeader>
                    <SheetTitle className="text-xl font-bold mb-4">
                      DevAcademy
                    </SheetTitle>
                  </SheetHeader>

                  {/* Mobile Search */}
                  <div className="mb-4">
                    <SearchBar placeholder="Search courses..." isMobile />
                  </div>

                  {/* Mobile Links */}
                  <nav className="flex flex-col space-y-2">
                    <Link
                      href="/courses"
                      className="px-3 py-2 rounded hover:bg-muted"
                    >
                      All Courses
                    </Link>
                    <Link
                      href="/paths"
                      className="px-3 py-2 rounded hover:bg-muted"
                    >
                      Career Paths
                    </Link>
                    {user && (
                      <Link
                        href="/dashboard"
                        className="px-3 py-2 rounded hover:bg-muted"
                      >
                        Dashboard
                      </Link>
                    )}
                    <Link
                      href="/about"
                      className="px-3 py-2 rounded hover:bg-muted"
                    >
                      About
                    </Link>
                    <Link
                      href="/contact"
                      className="px-3 py-2 rounded hover:bg-muted"
                    >
                      Contact
                    </Link>
                    {!user && (
                      <>
                        <Button asChild>
                          <Link
                            href="/auth/login"
                            className="px-3 py-2 rounded hover:bg-muted"
                          >
                            Login
                          </Link>
                        </Button>
                        <Button asChild>
                          <Link
                            href="/auth/register"
                            className="px-3 py-2 bg-primary text-primary-foreground rounded hover:brightness-90"
                          >
                            Sign up
                          </Link>
                        </Button>
                      </>
                    )}
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default NavbarHome
