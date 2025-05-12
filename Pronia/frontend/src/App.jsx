
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Blog from './pages/Blog'
import AboutUs from './pages/AboutUs'
import Pages from './pages/Pages'
import Contact from './pages/Contact'
import Admin from './pages/admin/Admin'
import Basket from './pages/basket/Basket'
import Detail from './pages/detailpage/Detail'

const router=createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/shop",
        element:<Shop/>
      },
      {
        path:"/blog",
        element:<Blog/>
      },
      {
        path:"/about",
        element:<AboutUs/>
      },
      {
        path:"/pages",
        element:<Pages/>
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
        path:"/detail",
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
