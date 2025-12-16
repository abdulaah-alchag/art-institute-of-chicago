import { Link } from "react-router";
import type { Art } from "../schemas/ArtSchema";

type CardProps = {
  art: Art;
};

const Card = ({ art }: CardProps) => {
  const { api_link, api_model, thumbnail, title } = art;

  return (
    <Link
      to={api_link}
      className="block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
    >
      <img
        src={thumbnail.lqip}
        alt={thumbnail.alt_text}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-red-500 mb-1">{title}</h2>
        {/* <p className="text-sm text-gray-500 mb-2">
          {new Date(timestamp).toLocaleDateString()}
        </p> */}
        <p className="text-gray-700 line-clamp-3">{api_model}</p>
      </div>
    </Link>
  );
};

export default Card;
