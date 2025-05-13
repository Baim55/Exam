import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./components/layout/Layout"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import Promotion from "./pages/Promotion"
import Pages from "./pages/Pages"
import Blog from "./pages/Blog"
import Contact from "./pages/Contact"
import Basket from "./pages/basket/Basket"
import Admin from "./pages/admin/Admin"
import Detail from "./pages/detailpage/Detail"

const router=createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/shop',
        element:<Shop/>
      },
      {
        path:'/promotion',
        element:<Promotion/>
      },
      {
        path:'/pages',
        element:<Pages/>
      },
      {
        path:'/blog',
        element:<Blog/>
      },
      {
        path:'/contact',
        element:<Contact/>
      },
      {
        path:'/basket',
        element:<Basket/>
      },
      {
        path:'/admin',
        element:<Admin/>
      },
      {
        path:'/detail/:id',
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
