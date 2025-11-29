import { CoffeeButton } from "@/components/coffee-button"

const coffeeTypes = [
  {
    title: "Espresso Coffee",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/espresso-coffee-dark-cup-white-background.jpg",
  },
  {
    title: "Americano Coffee",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/americano-coffee-cup-with-beans-light-background.jpg",
  },
  {
    title: "Cappuccino Coffee",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/cappuccino-latte-art-coffee-wooden-background.jpg",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 bg-cream" id="service">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px bg-coffee-brown w-16" />
            <div className="w-3 h-3 bg-coffee-brown rotate-45" />
            <div className="h-px bg-coffee-brown w-16" />
          </div>
          <p className="text-amber font-medium mb-2">Our Service</p>
          <h2 className="font-serif text-4xl md:text-5xl text-coffee-brown text-balance">Our Speciality</h2>
        </div>

        {/* Coffee Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coffeeTypes.map((coffee, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
              {/* Image with Wave Overlay */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={coffee.image || "/placeholder.svg"}
                  alt={coffee.title}
                  className="w-full h-full object-cover"
                />
                {/* White Wave Overlay */}
                <div className="absolute bottom-0 left-0 right-0">
                  <svg viewBox="0 0 500 80" preserveAspectRatio="none" className="w-full h-16">
                    <path d="M0,40 Q125,0 250,40 T500,40 L500,80 L0,80 Z" fill="white" />
                  </svg>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h3 className="font-serif text-2xl text-coffee-brown mb-3">{coffee.title}</h3>
                <p className="text-coffee-light leading-relaxed mb-6">{coffee.description}</p>
                <CoffeeButton>Read More</CoffeeButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}