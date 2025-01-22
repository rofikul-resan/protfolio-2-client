import { RiDoubleQuotesL } from "react-icons/ri";

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
    <section className="bg-[#100d25] text-white pb-20 rounded-3xl overflow-hidden mx-8">
      <div className="container mx-auto ">
        <div className=" bg-cardBg px-20 pt-20 pb-36 rounded-3xl ">
          <h2 className="text-success uppercase text-xl">What others say</h2>
          <h1 className="text-6xl font-bold">Testimonials.</h1>
        </div>
        <div className="grid md:grid-cols-3 gap-14 px-20 -mt-20 ">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[#090325] p-10 rounded-lg shadow-lg relative"
            >
              <div>
                <RiDoubleQuotesL className="text-6xl" />
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
