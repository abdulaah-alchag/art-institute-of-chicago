import { Link } from "react-router";
import type { Art } from "../schemas/ArtSchema";
import { useState } from "react";
import { ImgSchema, type Image } from "../schemas/ImgSchema";
import { z } from "zod/v4";

type CardProps = { art: Art };
// art obj in CardPropsEinfacher zu verstehen
const Card = ({ art }: CardProps) => {
  //const Card = ({ art }) => {
  //
  const {
    //api_link,
    api_model,
    thumbnail,
    title,
    id,
  } = art;

  const [img, setImg] = useState<string>("");

  const imgApi = async () => {
    try {
      const res = await fetch(
        "https://api.artic.edu/api/v1/artworks/" +
          id +
          "?fields=id,title,image_id",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!res.ok) throw new Error("Fetch failed");

      const resData = await res.json();
      // const data = resData.data;
      // console.log(data.id);
      // console.log(data.image_id);
      // console.log(data.title);
      const img: Image = {
        id: resData.data.id,
        image_id: resData.data.image_id,
        title: resData.data.title,
      };
      // console.log(img);
      setImg(img.image_id);

      const { data, error, success } = ImgSchema.safeParse(resData.data);
      if (!success) throw new Error(z.prettifyError(error));
      return data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Could not display Art:", error.message);
      } else {
        console.log("Something went wrong");
      }
    }
  };
  imgApi();

  const handleAdd = () => {
    localStorage.setItem("Arts", JSON.stringify(art));
  };

  return (
    <div className="flex-col">
      <Link
        to={`/art/${id}`}
        className="block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
      >
        <img
          src={`https://www.artic.edu/iiif/2/${img}/full/843,/0/default.jpg`}
          //src={`https://www.artic.edu/iiif/2/2d484387-2509-5e8e-2c43-22f9981972eb/full/843,/0/default.jpg`}
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
      <button
        onClick={handleAdd}
        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
      >
        Add to Gallery
      </button>
    </div>
  );
};

export default Card;
