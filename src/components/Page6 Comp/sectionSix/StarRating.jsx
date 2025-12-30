import { Star } from "lucide-react";

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);

  return [...Array(5)].map((_, index) => (
    <Star
      key={index}
      size={18}
      className={
        index < fullStars
          ? "text-orange-400 fill-orange-400"
          : "text-gray-300"
      }
    />
  ));
};

export default StarRating;
