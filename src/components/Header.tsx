import Link from 'next/link'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu, Search, ShoppingCart, User } from "lucide-react"

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Collection', href: '/collection' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-serif">
              VinWatch
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Utility Icons */}
          <div className="flex items-center space-x-4">
            <button aria-label="Search" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">
              <Search size={20} />
            </button>
            <button aria-label="Cart" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">
              <ShoppingCart size={20} />
            </button>
            <button aria-label="Account" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">
              <User size={20} />
            </button>

            {/* Mobile Menu Button - Only visible on mobile */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[200px] sm:w-[300px]">
                  <nav className="flex flex-col space-y-4 mt-8">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="text-lg font-medium text-gray-700 hover:text-gray-900 transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
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

