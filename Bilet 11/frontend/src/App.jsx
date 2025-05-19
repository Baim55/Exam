
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Shop from './pages/Shop'
import Catalogue from './pages/Catalogue'
import NewArrivals from './pages/NewArrivals'
import Contact from './pages/Contact'
import Admin from './pages/admin/Admin'
import Basket from './pages/basket/Basket'
import Detail from './pages/detail/Detail'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element:<Home/>
      },
      {
        path: "/about",
        element:<About/>
      },
      {
        path: "/shop",
        element:<Shop/>
      },
      {
        path: "/catalogue",
        element:<Catalogue/>
      },
      {
        path: "/new",
        element:<NewArrivals/>
      },
      {
        path: "/contact",
        element:<Contact/>
      },
      {
        path: "/admin",
        element:<Admin/>
      },
      {
        path: "/basket",
        element:<Basket/>
      },
      {
        path: "/detail/:id",
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
