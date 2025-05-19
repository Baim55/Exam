import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import About from "./pages/About";
import Admin from "./pages/admin/Admin";
import Basket from "./pages/basket/Basket";
import Contact from "./pages/Contact";
import Detail from "./pages/detail/Detail";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Wines from "./pages/Wines";
import NotFoundPage from "./pages/notfoundpage/NotFoundPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/wines",
        element: <Wines />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/basket",
        element: <Basket />,
      },
      {
        path: "/admin",
        element: <Admin />,
      },
      {
        path: "/detail/:id",
        element: <Detail />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
