function Inventory() {
  const inventory = [
    { name: "Mì tôm Hảo Hảo", stock: 120, status: "Còn hàng" },
    { name: "Bánh Oreo", stock: 45, status: "Còn hàng" },
    { name: "Nước mắm Nam Ngư", stock: 22, status: "Sắp hết" },
    { name: "Sữa đặc Ông Thọ", stock: 9, status: "Sắp hết" },
  ];

  return (
    <div className="card">
      <h2 className="section-title">Quản lý tồn kho</h2>

      <table className="table">
        <thead>
          <tr>
            <th>Sản phẩm</th>
            <th>Số lượng tồn</th>
            <th>Trạng thái</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.stock}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Inventory;