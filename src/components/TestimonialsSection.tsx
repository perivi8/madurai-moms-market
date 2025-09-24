import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Priya Rajesh',
      role: 'Regular Customer',
      location: 'Madurai',
      content: 'Sri Meenakshi Store has been our go-to grocery shop for 5 years. The quality is always fresh, and they know exactly what our family needs. The home delivery service is a lifesaver!',
      rating: 5,
      image: '👩‍🦳'
    },
    {
      id: 2,
      name: 'Murugan Hotel',
      role: 'Restaurant Owner',
      location: 'Business Customer',
      content: 'For our restaurant\'s bulk orders, Sri Meenakshi Store always delivers on time with competitive wholesale prices. They understand business needs and provide consistent quality.',
      rating: 5,
      image: '👨‍🍳'
    },
    {
      id: 3,
      name: 'Lakshmi Devi',
      role: 'Homemaker',
      location: 'Madurai',
      content: 'The personal attention and care they give to each customer is remarkable. They remember my preferences and always suggest the best seasonal products. Truly a family store!',
      rating: 5,
      image: '👵'
    }
  ];

  return (
    <section className="py-16 bg-cream/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-label font-semibold mb-4">
            💬 Customer Stories
          </div>
          
          <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
            What Our Community Says
          </h2>
          <p className="text-lg font-body text-muted-foreground max-w-2xl mx-auto">
            Real reviews from families and businesses who trust us with their grocery needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white border-0 shadow-soft hover:shadow-product transition-all duration-300">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Quote Icon */}
                  <div className="flex items-center justify-between">
                    <Quote className="h-6 w-6 text-primary/30" />
                    <div className="flex items-center gap-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-orange text-orange" />
                      ))}
                    </div>
                  </div>

                  {/* Testimonial Content */}
                  <p className="font-body text-foreground leading-relaxed text-sm">
                    "{testimonial.content}"
                  </p>

                  {/* Customer Info */}
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <div className="text-2xl">
                      {testimonial.image}
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-foreground text-sm">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs font-body text-muted-foreground">
                        {testimonial.role} • {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-2xl font-heading font-bold text-primary mb-2">1000+</div>
            <div className="text-sm font-body text-muted-foreground">Happy Families</div>
          </div>
          <div>
            <div className="text-2xl font-heading font-bold text-primary mb-2">50+</div>
            <div className="text-sm font-body text-muted-foreground">Business Partners</div>
          </div>
          <div>
            <div className="text-2xl font-heading font-bold text-primary mb-2">11</div>
            <div className="text-sm font-body text-muted-foreground">Years of Service</div>
          </div>
          <div>
            <div className="text-2xl font-heading font-bold text-primary mb-2">24/7</div>
            <div className="text-sm font-body text-muted-foreground">WhatsApp Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;