const Search = () => {
  return (
    <form className="max-w-md mx-auto mt-8">
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
  );
};

export default Search;
