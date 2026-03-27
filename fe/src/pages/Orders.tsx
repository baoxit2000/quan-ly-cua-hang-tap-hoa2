function Orders() {
  const orders = [
    { id: "HD001", customer: "Nguyễn Văn A", total: 120000, date: "27/03/2026", status: "Đã thanh toán" },
    { id: "HD002", customer: "Trần Thị B", total: 85000, date: "27/03/2026", status: "Đã thanh toán" },
    { id: "HD003", customer: "Lê Văn C", total: 210000, date: "27/03/2026", status: "Chờ xử lý" },
  ];

  return (
    <div className="card">
      <div className="table-header">
        <h2 className="section-title">Danh sách hóa đơn</h2>
        <button className="primary-btn">+ Tạo hóa đơn</button>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>Mã hóa đơn</th>
            <th>Khách hàng</th>
            <th>Tổng tiền</th>
            <th>Ngày</th>
            <th>Trạng thái</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.customer}</td>
              <td>{item.total.toLocaleString("vi-VN")} đ</td>
              <td>{item.date}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Orders;