import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Discover from './pages/Discover'
import Donate from './pages/Donate'
import Blog from './pages/Blog'
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
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/discover",
        element: <Discover />
      },
      {
        path: "/donate",
        element: <Donate />
      },
      {
        path: "/blog",
        element: <Blog />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/admin",
        element: <Admin />
      },
      {
        path: "/basket",
        element: <Basket />
      },
      {
        path: "/detail",
        element: <Detail />
      },
    ]
  }
])

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
