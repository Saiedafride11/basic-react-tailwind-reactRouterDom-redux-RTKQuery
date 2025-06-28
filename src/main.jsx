import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { store } from "./redux/store.js";
import Routes from "./routes/Routes.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={Routes} />
    </Provider>
  </StrictMode>
);
