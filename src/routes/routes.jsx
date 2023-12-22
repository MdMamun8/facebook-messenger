import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Conversation from "../Conversation/Conversation";
// import Login from "../Login/Login";
import Registration from "../Registration/Registration";
import NotFound from "../NotFound/NotFound";
import FormHook from "../Registration/FormHook/FormHook";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Registration />,
      },
      {
        path: "/login",
        // element: <Login />,
        element: <FormHook />,
      },
      {
        path: "/conversation",
        element: <Conversation />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
