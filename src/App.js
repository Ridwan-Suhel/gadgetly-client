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
import AddInventory from "./components/Pages/Inventory/AddInventory/AddInventory";
import Login from "./components/Pages/Login/Login";
import Signup from "./components/Pages/Signup/Signup";
import RequiredAuth from "./components/Shared/RequiredAuth/RequiredAuth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MyItem from "./components/Pages/MyItem/MyItem";

// https://fathomless-tor-80045.herokuapp.com

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/manageInventory"
          element={
            <RequiredAuth>
              <ManageInventory></ManageInventory>
            </RequiredAuth>
          }
        ></Route>
        <Route
          path="/inventory/:inventoryId"
          element={
            <RequiredAuth>
              <InventoryDetails></InventoryDetails>
            </RequiredAuth>
          }
        ></Route>
        <Route
          path="/addinventory"
          element={
            <RequiredAuth>
              <AddInventory></AddInventory>
            </RequiredAuth>
          }
        ></Route>
        <Route
          path="/myitem"
          element={
            <RequiredAuth>
              <MyItem></MyItem>
            </RequiredAuth>
          }
        ></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
      <Footer />
    </>
  );
}

export default App;
