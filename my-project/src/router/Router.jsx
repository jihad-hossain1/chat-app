import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/home/Home";
import MainLayout from "../layouts/Main/MainLayout";
import Chats from "../pages/chats/Chats";
import LogingSignin from "../pages/log/LogingSignin";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/chat",
        element: <Chats></Chats>,
      },
      {
        path: "/login",
        element: <LogingSignin />,
      },
    ],
  },
]);