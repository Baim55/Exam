import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Latest from "./pages/Latest";
import Pages from "./pages/Pages";
import Basket from "./pages/basket/Basket";
import AdminPanel from "./pages/admin/AdminPanel";
import DetailPage from "./pages/detailpage/DetailPage";
const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/category",
        element:<Category/>
      },
      {
        path:"/men",
        element:<Men/>
      },
      {
        path:"/women",
        element:<Women/>
      },
      {
        path:"/latest",
        element:<Latest/>
      },
      {
        path:"/pages",
        element:<Pages/>
      },
      {
        path:"/basket",
        element:<Basket/>
      },
      {
        path:"/detailpage/:id",
        element:<DetailPage/>
      },
      {
        path:"/admin",
        element:<AdminPanel/>
      },
    ]
  }
])
function App() {
  return <RouterProvider router={router}/>
}

export default App;
