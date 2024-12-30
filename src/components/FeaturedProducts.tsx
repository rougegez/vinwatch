import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const products = [
  {
    id: 1,
    name: 'Patek Philippe Nautilus',
    price: '$123,800',
    image: 'https://images.unsplash.com/photo-1626624386327-5204714bae9f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    name: 'Omega Speedmaster Professional Moonwatch',
    price: '$8000',
    image: 'https://images.unsplash.com/photo-1696321408191-62d7363743b4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    name: 'Omega Constellation',
    price: '$1,499',
    image: 'https://images.unsplash.com/photo-1677445166019-4fa91a090e49?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
]

export function FeaturedProducts() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold text-center mb-12">Featured Timepieces</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={product.id} className={`bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 animate-scaleIn`} style={{animationDelay: `${index * 0.1}s`}}>
              <div className="relative h-64">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform hover:scale-110 duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.price}</p>
                <Link href={`/watch/${product.id}`} passHref>
                  <Button className="w-full transition-colors duration-300 hover:bg-gray-800">View Details</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

