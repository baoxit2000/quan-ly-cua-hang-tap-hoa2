function Products() {
  const products = [
    { id: 1, name: "Mì tôm Hảo Hảo", category: "Thực phẩm", price: 4500, quantity: 120 },
    { id: 2, name: "Nước ngọt Coca", category: "Đồ uống", price: 10000, quantity: 80 },
    { id: 3, name: "Bánh Oreo", category: "Bánh kẹo", price: 12000, quantity: 45 },
    { id: 4, name: "Nước mắm Nam Ngư", category: "Gia vị", price: 38000, quantity: 22 },
  ];

  return (
    <div className="card">
      <div className="table-header">
        <h2 className="section-title">Danh sách sản phẩm</h2>
        <button className="primary-btn">+ Thêm sản phẩm</button>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>Mã</th>
            <th>Tên sản phẩm</th>
            <th>Danh mục</th>
            <th>Giá</th>
            <th>Số lượng</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>{item.price.toLocaleString("vi-VN")} đ</td>
              <td>{item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Products;