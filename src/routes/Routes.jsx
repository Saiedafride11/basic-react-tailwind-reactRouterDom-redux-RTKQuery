import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../page/About/About";
import NotFound from "../page/NotFound/NotFound";
import Product from "../page/Product/Product";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/product",
        element: <Product />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

export default Routes;
