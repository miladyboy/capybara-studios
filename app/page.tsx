import Link from "next/link"
import { ArrowRight, ChevronRight, Sparkles, Wand2, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProductCard from "@/components/product-card"
import CapybaraHero from "@/components/capybara-hero"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-blue-50">
      {/* Navbar */}
      <header className="container mx-auto py-6 px-4 md:px-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-full bg-amber-200 flex items-center justify-center">
              <span className="text-amber-800 font-bold text-xl">C</span>
            </div>
            <span className="font-bold text-xl text-gray-800">Capybara Studios</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            {/* Navigation links removed as requested */}
          </div>
          <Link
            href="https://getharem.com"
            className="bg-amber-400 hover:bg-amber-500 text-amber-900 rounded-md px-4 py-2 font-medium transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Started
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto py-16 px-4 md:px-6 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200 px-3 py-1 text-sm rounded-full">
              AI with personality
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
              Friendly AI tools for <span className="text-amber-500">everyday life</span>
            </h1>
            <p className="text-xl text-gray-600">
              We create fun, useful, and forward-thinking AI companions that make your life easier and more enjoyable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                className="bg-amber-400 hover:bg-amber-500 text-amber-900 rounded-full h-12 px-6 text-lg"
                asChild
              >
                <a href="#products">Meet our AI companions <ArrowRight className="ml-2 h-5 w-5" /></a>
              </Button>
            </div>
          </div>
          <div className="relative h-[400px] w-full">
            <CapybaraHero />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="container mx-auto py-16 px-4 md:px-6">
        <div className="text-center mb-16">
          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 px-3 py-1 text-sm rounded-full mb-4">
            Our AI Products
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">Meet your new AI companions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Thoughtfully designed AI tools that adapt to your needs and bring joy to your daily routine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProductCard
            title="Thrive"
            description="Your personal AI life coach and assistant, helping you achieve your goals and maintain balance."
            icon={<Sparkles className="h-6 w-6 text-purple-500" />}
            color="purple"
            imageUrl="/placeholder.svg?height=200&width=200"
            isLive={false}
          />
          <ProductCard
            title="Fitted"
            description="A fashion expert and personal stylist that helps you look your best for any occasion."
            icon={<Wand2 className="h-6 w-6 text-blue-500" />}
            color="blue"
            imageUrl="/placeholder.svg?height=200&width=200"
            isLive={false}
          />
          <ProductCard
            title="Harem"
            description="Your personal AI wingman, helping you navigate social situations with confidence."
            icon={<Zap className="h-6 w-6 text-pink-500" />}
            color="pink"
            imageUrl="/placeholder.svg?height=200&width=200"
            isLive={true}
            actionText="Use Harem now"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-800 hover:bg-green-200 px-3 py-1 text-sm rounded-full mb-4">
              Why Choose Us
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">AI that feels like a friend</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI tools are designed with personality, empathy, and a touch of playfulness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Personalized Experience",
                description: "Our AI adapts to your preferences and needs, creating a truly personalized experience.",
              },
              {
                title: "Privacy First",
                description: "Your data stays private. We prioritize security and transparency in everything we do.",
              },
              {
                title: "Continuous Learning",
                description: "Our AI tools get better over time, learning from interactions to serve you better.",
              },
              {
                title: "Friendly Interface",
                description: "Simple, intuitive interfaces that make advanced AI accessible to everyone.",
              },
              {
                title: "Practical Solutions",
                description: "We focus on solving real problems with AI that makes a difference in your daily life.",
              },
              {
                title: "Human Touch",
                description: "Technology with personality - our AI has character, humor, and empathy.",
              },
            ].map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-3xl p-8 hover:shadow-md transition-all">
                <div className="h-12 w-12 rounded-2xl bg-amber-100 flex items-center justify-center mb-6">
                  <span className="text-amber-800 font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto py-16 px-4 md:px-6">
        <div className="bg-gradient-to-r from-amber-100 to-pink-100 rounded-3xl p-8 md:p-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Ready to try Harem, your AI wingman?</h2>
            <p className="text-xl text-gray-700 mb-8">
              Join our community of happy users and discover how Harem can boost your confidence in social situations.
            </p>
            <Button className="bg-amber-400 hover:bg-amber-500 text-amber-900 rounded-full h-12 px-8 text-lg">
              Try Harem for free <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-50 py-12 mt-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-amber-200 flex items-center justify-center">
                  <span className="text-amber-800 font-bold text-sm">C</span>
                </div>
                <span className="font-bold text-gray-800">Capybara Studios</span>
              </div>
              <p className="text-gray-600">Creating AI with personality for everyday life.</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-4">Products</h3>
              <ul className="space-y-2">
                <li className="text-gray-600">Thrive (Coming soon)</li>
                <li className="text-gray-600">Fitted (Coming soon)</li>
                <li>
                  <a href="https://getharem.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:underline">Harem</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-4">Contact</h3>
              <p className="text-gray-600">team@capybarastudios.com</p>
              <div className="flex space-x-4 mt-4">
                <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-600">📧</span>
                </div>
                <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-600">📱</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-600">
            <p>© {new Date().getFullYear()} Capybara Studios. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
