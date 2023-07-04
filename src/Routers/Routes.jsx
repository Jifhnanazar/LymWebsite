import { createBrowserRouter } from "react-router-dom";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

export default Router;
