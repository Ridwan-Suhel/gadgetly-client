import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import Inventory from "./components/Pages/Inventory/Inventory";
import NotFound from "./components/Pages/NotFound/NotFound";
import Blogs from "./components/Pages/Blogs/Blogs";
import Header from "./components/Shared/Header/Header";
import Footer from "./components/Shared/Footer/Footer";

function App() {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route path="" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/inventory" element={<Inventory></Inventory>}></Route>
        <Route path="/notfound" element={<NotFound></NotFound>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
