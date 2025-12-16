import { Routes, Route } from "react-router";
import Mainlayout from "./components/Mainlayout";
import Search from "./pages/Search";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Mainlayout />}>
        <Route index element={<Search />} />
        {/* <Route element= {<List/>} */}
      </Route>
    </Routes>
  );
}

export default App;
