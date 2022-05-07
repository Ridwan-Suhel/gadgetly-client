import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import NotFound from "./components/Pages/NotFound/NotFound";
import Blogs from "./components/Pages/Blogs/Blogs";
import Header from "./components/Shared/Header/Header";
import Footer from "./components/Shared/Footer/Footer";
import InventoryDetails from "./components/Pages/Inventory/InventoryDetails/InventoryDetails";
import ManageInventory from "./components/Pages/Inventory/ManageInventory";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/manageInventory"
          element={<ManageInventory></ManageInventory>}
        ></Route>
        <Route
          path="/inventory/:inventoryId"
          element={<InventoryDetails></InventoryDetails>}
        ></Route>
        <Route path="/notfound" element={<NotFound></NotFound>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;