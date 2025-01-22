const ServiceCard = ({ image, title }) => {
  return (
    <div className="service-card-shadow">
      <div>
        <div className="relative h-72 w-72 p-[2px]  rounded-3xl bg-gradient-to-b from-slate-200 to-[#2c2263] ;">
          <div className="bg-cardBg h-full w-full  rounded-3xl p-4 flex flex-col justify-center items-center">
            <div>
              <div className="w-fit mx-auto mb-4">
                <img
                  src={image || ""}
                  alt="service image"
                  className="w-24 h-24"
                />
              </div>
              <div>
                <h2 className="text-3xl font-semibold text-center">{title}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
