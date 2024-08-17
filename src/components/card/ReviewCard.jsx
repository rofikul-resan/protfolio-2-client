import { FaQuoteLeft } from "react-icons/fa";

const ReviewCard = ({ review }) => {
  return (
    <div className="relative border-2 rounded-md h-72 p-6 mt-14 bg-white/10 backdrop-blur-sm ">
      <div className="absolute  -top-10 left-10 p1">
        <FaQuoteLeft className="text-6xl text-orange-400" />
      </div>
      <div>
        <h3 className="text-3xl font-semibold italic text-violet-400">
          {review.name}
        </h3>
        <p className="text-white font-roboto italic hover:underline cursor-pointer">
          {review.email}
        </p>
      </div>
      <p className="mt-6 text-white font-roboto">{review.review}</p>
    </div>
  );
};

export default ReviewCard;
