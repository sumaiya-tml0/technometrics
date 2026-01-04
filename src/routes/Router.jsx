import { ROUTES } from "@/constants/routes";
import React from "react";
import { createBrowserRouter } from "react-router";
import { homeLoader } from "./loader";
import MainLayout from "@/layouts/MainLayout";
import Home from "@/pages/home/Home";
import AboutLayout from "@/pages/about/AboutLayout";
import SolutionsLayout from "@/pages/solutions/SolutionsLayout";
import ServerStorage from "@/pages/solutions/ServerStorage";
import Datacenter from "@/pages/solutions/Datacenter";
import BMSFire from "@/pages/solutions/BMSFire";
import DigitalTransformation from "@/pages/solutions/DigitalTransformation";
import SoftwareDevelopment from "@/pages/solutions/SoftwareDevelopment";
import Cybersecurity from "@/pages/solutions/Cybersecurity";
import ContactUs from "@/pages/contact/ContactUs";
import Careers from "@/pages/careers/Careers";
import ErrorPage from "@/pages/error/ErrorPage";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    errorElement: <ErrorPage />,
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
      // Solution pages
      {
        path: ROUTES.SERVER_STORAGE,
        element: <ServerStorage />,
      },
      {
        path: ROUTES.DATACENTER,
        element: <Datacenter />,
      },
      {
        path: ROUTES.BMS_FIRE,
        element: <BMSFire />,
      },
      {
        path: ROUTES.DIGITAL_TRANSFORMATION,
        element: <DigitalTransformation />,
      },
      {
        path: ROUTES.SOFTWARE_DEVELOPMENT,
        element: <SoftwareDevelopment />,
      },
      {
        path: ROUTES.CYBERSECURITY,
        element: <Cybersecurity />,
      },
      // Contact page
      {
        path: ROUTES.CONTACT,
        element: <ContactUs />,
      },
      // Careers page
      {
        path: ROUTES.CAREERS,
        element: <Careers />,
      },
    ],
  },
]);
