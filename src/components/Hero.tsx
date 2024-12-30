import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative h-[600px] flex items-center">
      <Image
        src="https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
        alt="Vintage watch collection"
        fill
        style={{ objectFit: 'cover' }}
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl text-white animate-slideUp">
          <h1 className="text-5xl font-serif font-bold mb-4">Timeless Elegance on Your Wrist</h1>
          <p className="text-xl mb-8">Discover our curated collection of vintage timepieces, each with a story to tell.</p>
          <Link href="/collection">
            <Button size="lg">Explore Collection</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

