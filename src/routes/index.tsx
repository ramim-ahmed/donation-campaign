import RootLayout from "@/layout/RootLayout";
import Donation from "@/pages/Donation";
import Home from "@/pages/Home";
import Statitics from "@/pages/Statitics";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/donation",
        element: <Donation />,
      },
      {
        path: "/statitics",
        element: <Statitics />,
      },
    ],
  },
]);

export default routes;
