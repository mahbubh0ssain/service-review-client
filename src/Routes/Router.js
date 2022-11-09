import { createBrowserRouter } from "react-router-dom";
import Route404 from "../components/404/Route404";
import AddService from "../components/AddService/AddService";
import Blogs from "../components/Blogs/Blogs";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import MyReviews from "../components/MyReviews/MyReviews";
import ServiceandRivew from "../components/ServiceandRivew/ServiceandRivew";
import Services from "../components/Services/Services";
import Signup from "../components/Signup/Signup";
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
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/add-service",
        element: <AddService></AddService>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/my-review",
        element: <MyReviews></MyReviews>,
      },
    ],
  },
  { path: "*", element: <Route404></Route404> },
]);
