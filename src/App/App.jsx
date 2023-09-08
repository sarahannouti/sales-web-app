import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage } from "../home/HomePage";
import { MainTemplate } from "../MainTemplate";
import { CountersPage } from "../counters/CountersPage";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import "./styles.css";

const router = createBrowserRouter([
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

export default function App() {
  return <RouterProvider router={router} />;
}
