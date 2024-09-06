import Home from "./pages/Home";
import Article from "./pages/Article";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/article",
    element: <Article />,
  },
];

export default routes;
