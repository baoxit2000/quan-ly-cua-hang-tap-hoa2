import { Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Categories from "./pages/Categories";
import Orders from "./pages/Orders";
import Inventory from "./pages/Inventory";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="products" element={<Products />} />
        <Route path="categories" element={<Categories />} />
        <Route path="orders" element={<Orders />} />
        <Route path="inventory" element={<Inventory />} />
      </Route>
    </Routes>
  );
}

export default App;