import { ROUTES } from "@/constants/routes";
import React from "react";
import { createBrowserRouter } from "react-router";
import { homeLoader } from "./loader";
import MainLayout from "@/layouts/MainLayout";
import Home from "@/pages/home/Home";
import AboutLayout from "@/pages/about/AboutLayout";
import SolutionsLayout from "@/pages/solutions/SolutionsLayout";
import ServerStorage from "@/pages/solutions/ServerStorage";
import NetworkIPT from "@/pages/solutions/NetworkIPT";
import Datacenter from "@/pages/solutions/Datacenter";
import BMSSurveillance from "@/pages/solutions/BMSSurveillance";
import BMSFire from "@/pages/solutions/BMSFire";
import RPA from "@/pages/solutions/RPA";
import Cybersecurity from "@/pages/solutions/Cybersecurity";
import SoftwareDevelopment from "@/pages/solutions/SoftwareDevelopment";
import ContactUs from "@/pages/contact/ContactUs";
import Careers from "@/pages/careers/Careers";
import JobDetail from "@/pages/careers/JobDetail";
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
        path: ROUTES.NETWORK_IPT,
        element: <NetworkIPT />,
      },
      {
        path: ROUTES.DATACENTER,
        element: <Datacenter />,
      },
      {
        path: ROUTES.BMS_SURVEILLANCE,
        element: <BMSSurveillance />,
      },
      {
        path: ROUTES.BMS_FIRE,
        element: <BMSFire />,
      },
      {
        path: ROUTES.RPA,
        element: <RPA />,
      },
      {
        path: ROUTES.CYBERSECURITY,
        element: <Cybersecurity />,
      },
      {
        path: ROUTES.SOFTWARE_DEVELOPMENT,
        element: <SoftwareDevelopment />,
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
      {
        path: ROUTES.JOB_DETAIL,
        element: <JobDetail />,
      },
    ],
  },
]);
