import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { notFound } from 'next/navigation'

const watches = [
  { 
    id: 1, 
    name: 'Classic Chronograph', 
    price: '$1,299', 
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    description: 'A timeless masterpiece, our Classic Chronograph combines elegant design with precision engineering. Featuring a stainless steel case, sapphire crystal, and water resistance up to 100 meters, this watch is perfect for both formal occasions and everyday wear.',
    features: ['Automatic movement', 'Stainless steel case', 'Sapphire crystal', 'Water resistant to 100m', 'Chronograph function'],
    dimensions: { diameter: '42mm', thickness: '12mm' },
    strap: { material: 'Genuine leather', width: '20mm' }
  },
  { 
    id: 2, 
    name: 'Elegant Dress Watch', 
    price: '$899', 
    image: 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    description: 'Our Elegant Dress Watch epitomizes sophistication and style. With its slim profile and minimalist dial, this timepiece is the perfect accessory for formal events or business attire. The gold-plated case adds a touch of luxury to this already exquisite watch.',
    features: ['Quartz movement', 'Gold-plated case', 'Scratch-resistant sapphire crystal', 'Water resistant to 30m'],
    dimensions: { diameter: '38mm', thickness: '8mm' },
    strap: { material: 'Alligator leather', width: '18mm' }
  },
  { 
    id: 3, 
    name: 'Vintage Diver', 
    price: '$1,499', 
    image: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    description: 'Inspired by the golden age of underwater exploration, our Vintage Diver watch combines retro aesthetics with modern functionality. This robust timepiece features a unidirectional rotating bezel and exceptional water resistance, making it suitable for professional divers and vintage enthusiasts alike.',
    features: ['Automatic movement', 'Stainless steel case', 'Unidirectional rotating bezel', 'Super-LumiNova indices', 'Water resistant to 300m'],
    dimensions: { diameter: '44mm', thickness: '14mm' },
    strap: { material: 'Stainless steel bracelet', width: '22mm' }
  },
  // ... add details for other watches
]

export default function WatchDetails({ params }: { params: { id: string } }) {
  const watch = watches.find(w => w.id === parseInt(params.id))

  if (!watch) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col animate-fadeIn">
      <Header />
      <main className="flex-grow">
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="relative h-[500px] animate-scaleIn">
                <Image
                  src={watch.image}
                  alt={watch.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg"
                />
              </div>
              <div className="animate-slideUp">
                <h1 className="text-4xl font-serif font-bold mb-4">{watch.name}</h1>
                <p className="text-2xl text-gray-600 mb-6">{watch.price}</p>
                <p className="text-gray-600 mb-6">{watch.description}</p>
                <h2 className="text-2xl font-serif font-bold mb-4">Features</h2>
                <ul className="list-disc list-inside mb-6">
                  {watch.features.map((feature, index) => (
                    <li key={index} className="text-gray-600 mb-2">{feature}</li>
                  ))}
                </ul>
                <h2 className="text-2xl font-serif font-bold mb-4">Specifications</h2>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <h3 className="font-bold">Dimensions</h3>
                    <p className="text-gray-600">Diameter: {watch.dimensions.diameter}</p>
                    <p className="text-gray-600">Thickness: {watch.dimensions.thickness}</p>
                  </div>
                  <div>
                    <h3 className="font-bold">Strap</h3>
                    <p className="text-gray-600">Material: {watch.strap.material}</p>
                    <p className="text-gray-600">Width: {watch.strap.width}</p>
                  </div>
                </div>
                <Button className="w-full transition-colors duration-300 hover:bg-gray-800">Add to Cart</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

