import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../page/About/About";
import Home from "../page/Home/Home";
import NotFound from "../page/NotFound/NotFound";
import Product from "../page/Product/Product";
import ProductById from "../page/Product/ProductById";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/product/:id",
        element: <ProductById />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

export default Routes;
