import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import ServiceandRivew from "../components/ServiceandRivew/ServiceandRivew";
import Services from "../components/Services/Services";
import Main from "../layout/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/services/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/all-service/${params.id}`),
        element: <ServiceandRivew></ServiceandRivew>,
      },
    ],
  },
]);
