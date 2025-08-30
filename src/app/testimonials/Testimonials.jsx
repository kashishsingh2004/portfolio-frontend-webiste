const testimonials = [
  {
    name: "chhaya",
    text: "Excellent work! The website exceeded our expectations. Professional and timely delivery.",
  },
  {
    name: "chhotki",
    text: "Outstanding developer with great attention to detail. Highly recommended for web projects.",
  },
  {
    name: "krish",
    text: "Built our company website perfectly. Great communication throughout the project.",
  },
];
export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <h2>They trusted me</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <h4>{testimonial.name}</h4>
              <p>&quot;{testimonial.text}&quot;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
