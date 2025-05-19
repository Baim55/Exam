import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './App.css'
import Layout from "./components/layout/Layout"
import Home from "./pages/Home"
import Menu from "./pages/Menu"
import Specialties from "./pages/Specialties"
import Reservation from "./pages/Reservation"
import Blog from "./pages/Blog"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Admin from "./pages/admin/Admin"
import Basket from "./pages/basket/Basket"
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
        path:"/menu",
        element:<Menu/>
      },
      {
        path:"/spectialties",
        element:<Specialties/>
      },
      {
        path:"/reservation",
        element:<Reservation/>
      },
      {
        path:"/blog",
        element:<Blog/>
      },
      {
        path:"/about",
        element:<About/>
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
        path:"/basket",
        element:<Basket/>
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
