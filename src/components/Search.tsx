import { useState } from "react";
import { z } from "zod/v4";
import Card from "./Card";
import { ArtSchema, type Art } from "../schemas/ArtSchema";
const API_USERS_ENDPOINT = "https://api.artic.edu/api/v1/artworks/search";

// Konnte nicht aus dieser Setie Schema exportieren
// Nutzen wir Zentraliert Schema

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [artworks, setArtworks] = useState<Art[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(searchTerm);
    console.log(typeof searchTerm);
    const samer = searchApi(searchTerm);
    console.log(samer);
  };

  const Arts = z.array(ArtSchema);
  // Nutzung ArtSChema in Array fur später resData.data

  const searchApi = async (searchTerm: string) => {
    try {
      const res = await fetch(API_USERS_ENDPOINT + "?q=" + searchTerm, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) throw new Error("Fetch failed");

      const resData = await res.json();
      const { data, error, success } = Arts.safeParse(resData.data);
      if (!success) throw new Error(z.prettifyError(error));
      // data
      console.log(data);
      if (data) {
        setArtworks(data);
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Could not display Art:", error.message);
      } else {
        console.log("Something went wrong");
      }
    }
  };

  return (
    <>
      <form className="max-w-md mx-auto mt-8" onSubmit={handleSubmit}>
        <label htmlFor="search" className="sr-only">
          Search
        </label>

        <div className="relative">
          {/* Icon */}
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>

          {/* Input */}
          <input
            type="search"
            id="search"
            placeholder="Search artworks..."
            className="block w-full rounded-md border border-gray-300 bg-white py-2.5 pl-9 pr-20 text-sm text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none"
            required
            onChange={handleChange}
            value={searchTerm}
          />

          {/* Button */}
          <button
            type="submit"
            className="absolute right-1.5 bottom-1.5 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Search
          </button>
        </div>
      </form>
      {artworks.length === 0 ? (
        <p className="text-gray-500 text-lg">Noch keine Einträge vorhanden.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {artworks.map((art: Art) => (
            <Card key={art.id} art={art} />
          ))}
        </div>
      )}
    </>
  );
};

export default Search;
