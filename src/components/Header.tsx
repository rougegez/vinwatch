import Link from 'next/link'
import { Search, ShoppingCart, User } from 'lucide-react'

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-serif font-bold text-gray-800">
          VinWatch
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">Home</Link>
          <Link href="/collection" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">Collection</Link>
          <Link href="/about" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">About</Link>
          <Link href="/contact" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">Contact</Link>
        </nav>
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
        </div>
      </div>
    </header>
  )
}

