import { NavLink } from "react-router-dom";

const menuItems = [
  { path: "/dashboard", label: "Tổng quan" },
  { path: "/products", label: "Sản phẩm" },
  { path: "/categories", label: "Danh mục" },
  { path: "/orders", label: "Hóa đơn" },
  { path: "/inventory", label: "Tồn kho" },
];

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <h2>Tạp Hóa</h2>
        <p>Quản lý cửa hàng</p>
      </div>

      <nav className="sidebar-menu">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              isActive ? "menu-item active" : "menu-item"
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;