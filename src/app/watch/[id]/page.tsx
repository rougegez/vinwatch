import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { notFound } from 'next/navigation'

const watches = [
  { 
    id: 1, 
    name: 'Patek Philippe Nautilus', 
    price: '$123,800', 
    image: 'https://images.unsplash.com/photo-1626624386327-5204714bae9f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'The Patek Philippe Nautilus is a legendary luxury sports watch, introduced in 1976 and celebrated for its distinctive porthole-inspired case design, integrated bracelet, and unparalleled craftsmanship. Combining elegance with versatility, it is crafted from premium materials like stainless steel or precious metals and features intricate movements synonymous with Patek Philippe’s reputation for excellence. The Nautilus has become a timeless icon, coveted by watch enthusiasts and collectors worldwide.',
    features: ['Automatic movement', 'Stainless steel case', 'Sapphire crystal', 'Water resistant to 100m', 'Scratch Resistant Sapphire Crystal Mirror'],
    dimensions: { diameter: '40mm', thickness: '9mm' },
    strap: { material: 'Silver', width: '20mm' }
  },
  { 
    id: 2, 
    name: 'Omega Speedmaster Professional Moonwatch', 
    price: '$8000', 
    image: 'https://images.unsplash.com/photo-1696321408191-62d7363743b4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: "The Omega Speedmaster Moonwatch is a legendary chronograph, famously known as the first watch worn on the moon during the Apollo 11 mission in 1969. Renowned for its precision, durability, and timeless design, it remains an iconic symbol of space exploration and horological excellence.",
    features: ['Manual Winding', 'Chronometer', 'Scratch-resistant sapphire crystal', 'Water resistant to 50m'],
    dimensions: { diameter: '42mm', thickness: '13.2mm' },
    strap: { material: 'Steel', width: '18mm' }
  },
  { 
    id: 3, 
    name: 'Omega Constellation', 
    price: '$1,499', 
    image: 'https://images.unsplash.com/photo-1677445166019-4fa91a090e49?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'The 1956 Omega Antique Constellation Cal. 505 GF Wedge is a rare vintage timepiece prized for its timeless elegance and craftsmanship. Featuring the renowned Caliber 505 automatic movement, it boasts a gold-filled case with a distinctive "wedge" design, a hallmark of mid-century luxury. The Constellation series, known for precision and style, includes this collectible model with its iconic star emblem and crosshair dial. It remains a sought-after piece for collectors and enthusiasts of classic Omega watches.',
    features: ['Self-Winding Chronometer', 'Stainless steel case', 'New Cassis alligator clicker finish', 'Non-waterproof'],
    dimensions: { diameter: '34.5mm', thickness: '14mm' },
    strap: { material: 'Crocodile Skin', width: '18mm' }
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

