import {
  Outlet
} from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <h1>Short URL</h1>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;