import { serviceData } from "../../public/data/serviceData";
import ServiceCard from "./card/ServiceCard";

const Services = () => {
  return (
    <div className="flex my-10 justify-center gap-8">
      {serviceData.services.map((service) => (
        <ServiceCard
          key={service.id}
          image={service.image}
          title={service.title}
        />
      ))}
    </div>
  );
};

export default Services;
