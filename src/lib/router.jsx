import ErrorPage from "@/pages/error";
import { createBrowserRouter } from "react-router-dom";
import portfolioRotes from "@/pages/portfolio/routes";
import Portfolio from "@/pages/portfolio";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Portfolio />,
    children: portfolioRotes,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
