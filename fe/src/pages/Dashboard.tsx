function Dashboard() {
  const stats = [
    { title: "Tổng sản phẩm", value: 128 },
    { title: "Danh mục", value: 8 },
    { title: "Hóa đơn hôm nay", value: 35 },
    { title: "Sắp hết hàng", value: 12 },
  ];

  return (
    <div>
      <div className="card-grid">
        {stats.map((item) => (
          <div key={item.title} className="card stat-card">
            <h3>{item.title}</h3>
            <p className="stat-value">{item.value}</p>
          </div>
        ))}
      </div>

      <div className="card mt-20">
        <h2 className="section-title">Giới thiệu chức năng</h2>
        <ul className="feature-list">
          <li>Quản lý sản phẩm trong cửa hàng</li>
          <li>Phân loại sản phẩm theo danh mục</li>
          <li>Tạo và quản lý hóa đơn bán hàng</li>
          <li>Theo dõi số lượng tồn kho</li>
          <li>Kiểm tra sản phẩm sắp hết</li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;