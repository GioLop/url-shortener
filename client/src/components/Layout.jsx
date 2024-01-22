import {
  Outlet
} from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <h1 className="heading1">Short URL</h1>
      <main className="main-box">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;