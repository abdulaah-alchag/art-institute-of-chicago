import { Routes, Route } from "react-router";
import Mainlayout from "./components/Mainlayout";
import Search from "./components/Search";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Mainlayout />}>
        <Route index element={<Search />} />
      </Route>
    </Routes>
  );
}

export default App;
