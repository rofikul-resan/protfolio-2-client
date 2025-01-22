const testimonials = [
  {
    id: 1,
    text: "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    title: "CFO of Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    id: 2,
    text: "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    title: "COO of DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    id: 3,
    text: "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    title: "CTO of 456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
];

const ReviewSection = () => {
  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">What Others Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-800 p-6 rounded-lg shadow-lg relative"
            >
              <div className="absolute top-4 left-4 text-6xl text-gray-600">
                "
              </div>
              <p className="text-lg mt-12">{testimonial.text}</p>
              <div className="flex items-center mt-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <p className="font-bold">@{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
