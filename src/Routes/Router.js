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
import PrivateRouter from "./PrivateRouter";

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
          fetch(`${process.env.REACT_APP_URL}/all-service/${params.id}`),
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
        element: (
          <PrivateRouter>
            <AddService></AddService>
          </PrivateRouter>
        ),
      },
      {
        path: "/my-review",        
        element: (
          <PrivateRouter>
            <MyReviews></MyReviews>
          </PrivateRouter>
        ),
      },
    ],
  },
  { path: "*", element: <Route404></Route404> },
]);
