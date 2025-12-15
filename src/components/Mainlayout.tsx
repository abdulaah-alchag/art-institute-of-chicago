import { Outlet } from "react-router";
const Mainlayout = () => {
  return (
    <div>
      <header className="flex justify-between items-center p-4 bg-gray-100">
        <h1 className="text-xl font-bold">Art Instution of Chicago</h1>

        {/* <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700">
          Neuer Eintrag
        </button> */}
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Mainlayout;
