// import Conversation from '../Conversation/Conversation';
// import Login from '../Login/Login';

import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default MainLayout;
