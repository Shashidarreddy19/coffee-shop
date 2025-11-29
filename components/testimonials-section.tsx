import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Coffee Enthusiast",
    content:
      "The best coffee experience I have ever had. The attention to detail and quality of their beans is exceptional. Highly recommended!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Regular Customer",
    content:
      "Amazing atmosphere and even better coffee. The baristas really know their craft and it shows in every cup they make.",
    rating: 5,
  },
  {
    name: "Emma Williams",
    role: "Food Blogger",
    content:
      "A hidden gem for coffee lovers. Their specialty drinks are creative and delicious. I keep coming back for more!",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-cream-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px bg-coffee-brown w-16" />
            <div className="w-3 h-3 bg-coffee-brown rotate-45" />
            <div className="h-px bg-coffee-brown w-16" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-coffee-brown text-balance">What Our Customers Say</h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber text-amber" />
                ))}
              </div>

              {/* Testimonial Content */}
              <p className="text-coffee-light leading-relaxed mb-6">{testimonial.content}</p>

              {/* Customer Info */}
              <div className="border-t border-cream-dark pt-4">
                <h4 className="font-semibold text-coffee-brown">{testimonial.name}</h4>
                <p className="text-sm text-coffee-light">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}