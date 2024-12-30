import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Image from 'next/image'

export default function About() {
  return (
    <div className="min-h-screen flex flex-col animate-fadeIn">
      <Header />
      <main className="flex-grow">
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-serif font-bold text-center mb-12 animate-slideUp">About VinWatch</h1>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-slideUp" style={{animationDelay: '0.2s'}}>
                <h2 className="text-2xl font-serif font-bold mb-4">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  Founded in 2023, VinWatch is born from a passion for horological craftsmanship and a deep appreciation for the timeless elegance of vintage timepieces. Our mission is to curate and offer a selection of the finest vintage watches, each with its own unique story and character.
                </p>
                <p className="text-gray-600 mb-4">
                  We believe that a watch is more than just a tool to tell time; it's a piece of history, a work of art, and a statement of personal style. Our team of expert horologists carefully selects each piece in our collection, ensuring authenticity, quality, and historical significance.
                </p>
                <p className="text-gray-600">
                  At VinWatch, we're not just selling watches; we're preserving history and passing on the legacy of fine watchmaking to a new generation of enthusiasts.
                </p>
              </div>
              <div className="relative h-[400px] animate-scaleIn" style={{animationDelay: '0.4s'}}>
                <Image
                  src="https://images.unsplash.com/photo-1490367532201-b9bc1dc483f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                  alt="Vintage watch workshop"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

