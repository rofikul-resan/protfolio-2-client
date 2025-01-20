const ServiceCard = ({ image, title }) => {
  return (
    <div className="service-card-shadow">
      <div>
        <div className="relative h-80 p-1  rounded-lg bg-gradient-to-t to-[#161131] from-success;">
          <div className="bg-[#161131] absolute rounded-md inset-0">
            <div className="w-fit mx-auto">
              <img
                src={image || ""}
                alt="service image"
                className="w-16 h-16"
              />
            </div>
            <div>
              <h2 className="text-3xl text-success font-bold text-center">
                {title}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
