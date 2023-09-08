import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./home/HomePage";
import MainTemplate from "./MainTemplate";
import CountersPage from "./counters/CountersPage";

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
