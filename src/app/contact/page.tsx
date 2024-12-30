import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col animate-fadeIn">
      <Header />
      <main className="flex-grow">
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-serif font-bold text-center mb-12 animate-slideUp">Contact Us</h1>
            <div className="max-w-2xl mx-auto">
              <form className="space-y-6 animate-scaleIn">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <Input type="text" id="name" name="name" required className="w-full" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <Input type="email" id="email" name="email" required className="w-full" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <Textarea id="message" name="message" rows={5} required className="w-full" />
                </div>
                <Button type="submit" className="w-full transition-colors duration-300 hover:bg-gray-800">Send Message</Button>
              </form>
              <div className="mt-12 text-center animate-slideUp" style={{animationDelay: '0.2s'}}>
                <h2 className="text-2xl font-serif font-bold mb-4">Visit Our Showroom</h2>
                <p className="text-gray-600 mb-2">123 Vintage Lane, Timeless City</p>
                <p className="text-gray-600 mb-2">Open Monday to Friday, 10am - 6pm</p>
                <p className="text-gray-600">Phone: (555) 123-4567</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

