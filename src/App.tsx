import { Routes, Route } from "react-router";
import Mainlayout from "./components/Mainlayout";
import Search from "./pages/Search";
import ArtPage from "./pages/ArtPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Mainlayout />}>
        <Route index element={<Search />} />
        <Route path="art/:id" element={<ArtPage />} />
      </Route>
    </Routes>
  );
}

export default App;
