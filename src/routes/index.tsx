import RootLayout from "@/layout/RootLayout";
import { fetchDonationLists, fetchDontionDetails } from "@/lib/query";
import Donation from "@/pages/Donation";
import DonationDetails from "@/pages/DonationDetails";
import Home from "@/pages/Home";
import Statistics from "@/pages/Statistics";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: async () => await fetchDonationLists(),
      },
      {
        path: "/donation",
        element: <Donation />,
      },
      {
        path: "/donation-details/:id",
        element: <DonationDetails />,
        loader: ({ params }) => fetchDontionDetails(params.id as string),
      },
      {
        path: "/statistics",
        element: <Statistics />,
        loader: async () => await fetchDonationLists(),
      },
    ],
  },
]);

export default routes;
