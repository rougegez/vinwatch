import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const watches = [
  { id: 1, name: 'Classic Chronograph', price: '$1,299', image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80' },
  { id: 2, name: 'Elegant Dress Watch', price: '$899', image: 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80' },
  { id: 3, name: 'Vintage Diver', price: '$1,499', image: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80' },
  { id: 4, name: 'Art Deco Timepiece', price: '$2,199', image: 'https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80' },
  { id: 5, name: 'Minimalist Watch', price: '$799', image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80' },
  { id: 6, name: 'Luxury Gold Watch', price: '$3,499', image: 'https://images.unsplash.com/photo-1548169874-53e85f753f1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80' },
]

export default function Collection() {
  return (
    <div className="min-h-screen flex flex-col animate-fadeIn">
      <Header />
      <main className="flex-grow">
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-serif font-bold text-center mb-12 animate-slideUp">Our Collection</h1>
            <div className="grid md:grid-cols-3 gap-8">
              {watches.map((watch, index) => (
                <div key={watch.id} className={`bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 animate-scaleIn`} style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="relative h-64">
                    <Image
                      src={watch.image}
                      alt={watch.name}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="transition-transform hover:scale-110 duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{watch.name}</h3>
                    <p className="text-gray-600 mb-4">{watch.price}</p>
                    <Link href={`/watch/${watch.id}`} passHref>
                      <Button className="w-full transition-colors duration-300 hover:bg-gray-800">View Details</Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

