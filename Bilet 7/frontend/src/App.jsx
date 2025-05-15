import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './App.css'
import Layout from "./components/layout/Layout"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import Catalogs from "./pages/Catalogs"
import Contact from "./pages/Contact"
import Admin from "./pages/admin/Admin"
import Basket from "./pages/basket/Basket"
import Collection from "./pages/Collection"
import Detail from "./pages/detail/Detail"

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
        path:"/collection",
        element:<Collection/>
      },
      {
        path:"/shop",
        element:<Shop/>
      },
      {
        path:"/catalogs",
        element:<Catalogs/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/admin",
        element:<Admin/>
      },
      {
        path:"/detail/:id",
        element:<Detail/>
      },
    ]
  }
])

function App() {

  return (
    <RouterProvider router={router}/>
      
  )
}

export default App
