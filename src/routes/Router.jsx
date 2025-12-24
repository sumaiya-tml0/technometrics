import { ROUTES } from "@/constants/routes";
import React from "react";
import { createBrowserRouter } from "react-router";
import { homeLoader } from "./loader";
import MainLayout from "@/layouts/MainLayout";
import Home from "@/pages/home/Home";
import AboutLayout from "@/pages/about/AboutLayout";
import SolutionsLayout from "@/pages/solutions/SolutionsLayout";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: ROUTES.HOME,
        element: <Home />,
        loader: homeLoader,
      },
      {
        path: ROUTES.ABOUT,
        element: <AboutLayout />,
        loader: homeLoader,
      },
      {
        path: ROUTES.SOLUTIONS,
        element: <SolutionsLayout />,
        loader: homeLoader,
      },
    ],
  },
]);
