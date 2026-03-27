import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function MainLayout() {
  return (
    <div className="app-shell">
      <Sidebar />

      <div className="main-area">
        <header className="topbar">
          <div>
            <h1>Hệ thống quản lý cửa hàng tạp hóa</h1>
            <p>Theo dõi sản phẩm, hóa đơn và tồn kho</p>
          </div>

          <div className="user-box">
            <span>Admin</span>
          </div>
        </header>

        <main className="page-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default MainLayout;