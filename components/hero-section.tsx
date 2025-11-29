import { CoffeeButton } from "@/components/coffee-button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center" id="home">
      <div className="w-full grid lg:grid-cols-2">
        {/* Left Side - Image */}
        <div className="relative h-[50vh] lg:h-screen">
          <img
            src="/coffee-brewing-pour-over-dark-moody-professional.jpg"
            alt="Coffee brewing"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Curved Divider */}
        <div className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-24 -translate-x-1/2 pointer-events-none hidden lg:block">
          <svg viewBox="0 0 100 1000" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
            <path d="M0,0 Q50,500 0,1000 L100,1000 L100,0 Z" fill="#3E2723" className="fill-coffee-brown" />
          </svg>
        </div>

        {/* Right Side - Content */}
        <div className="relative bg-cream flex items-center justify-center px-6 py-16 lg:py-0">
          <div className="max-w-xl">
            {/* Decorative Diamond */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-3 h-3 bg-coffee-brown rotate-45" />
              <div className="h-px bg-coffee-brown flex-1" />
            </div>

            {/* Heading */}
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-coffee-brown mb-6 leading-tight text-balance">
              Great Coffee For Some Joy
            </h1>

            {/* Subtext */}
            <p className="text-coffee-light text-lg mb-8 leading-relaxed">
              It is a long established fact that a reader will be distracted by the readable content of a page when
              looking at its layout.
            </p>

            {/* CTA Button */}
            <CoffeeButton>Read More</CoffeeButton>
          </div>
        </div>
      </div>
    </section>
  )
}