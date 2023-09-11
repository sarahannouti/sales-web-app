import { createBrowserRouter } from "react-router-dom";

import { HomePage } from "../home/HomePage";
import { MainTemplate } from "../MainTemplate";
import { CountersPage } from "../counters/CountersPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainTemplate />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "counters",
        element: <CountersPage />,
      },
    ],
  },
]);
