import { Star, Eye, Share2 } from "lucide-react";
import { FaRegBookmark } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const {
    title,
    rating,
    total_view,
    author,
    thumbnail_url,
    details,
    tags,
  } = news;

  const formattedDate = new Date(author.published_date).toLocaleDateString(
    "en-US",
    { year: "numeric", month: "2-digit", day: "2-digit" }
  );

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-100 p-5 mx-auto hover:shadow-lg transition-all duration-300 mt-5">

      {/* Top: Author info and share icon */}
      <div className="-mx-5 -mt-5 bg-base-200 flex items-center justify-between px-5 py-3 rounded">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover border"
          />
          <div>
            <h3 className="font-semibold text-gray-800 text-sm">
              {author.name}
            </h3>
            <p className="text-xs mt-1.5 text-gray-500">{formattedDate}</p>
          </div>
        </div>
        <div className="flex gap-3">
            <FaRegBookmark  size={20}
          className=" hover:text-orange-500 cursor-pointer"/>
            <Share2
          size={20}
          className=" hover:text-orange-500 cursor-pointer"
        />
        </div>
      </div>

      {/* Title */}
      <h2 className="font-bold text-lg mt-4 text-gray-900 leading-snug">
        {title}
      </h2>

      {/* Image */}
      <img
        src={thumbnail_url}
        alt={title}
        className="rounded-lg mt-4 w-full h-60 object-cover"
      />

      {/* Meta info */}
      <div className="mt-3 text-sm text-gray-600">
        <p>
          Wednesday, {formattedDate} |{" "}
          <span className="font-medium text-gray-600">
            Tag Cloud Tags:
          </span>{" "}
          {tags.join(", ")}
        </p>
      </div>

      {/* Description */}
      <p className=" text-gray-700 mt-3 leading-relaxed">
        {details.slice(0, 180)}...{" "}
        <span className="text-orange-500 font-semibold cursor-pointer">
          Read More
        </span>
      </p>

      {/* Bottom: Rating + Views */}
      <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
        {/* Rating */}
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={16}
              fill={i < rating.number ? "#f97316" : "none"}
              strokeWidth={1.3}
              stroke="#f97316"
            />
          ))}
          <span className="text-sm font-medium text-gray-700 ml-1">
            {rating.number.toFixed(1)}
          </span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-1 text-gray-600 text-sm">
          <Eye size={16} />
          <span>{total_view.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
