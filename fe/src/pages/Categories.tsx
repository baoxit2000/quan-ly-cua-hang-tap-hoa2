function Categories() {
  const categories = [
    "Thực phẩm",
    "Đồ uống",
    "Bánh kẹo",
    "Gia vị",
    "Đồ gia dụng",
    "Sữa",
  ];

  return (
    <div className="card">
      <div className="table-header">
        <h2 className="section-title">Danh mục sản phẩm</h2>
        <button className="primary-btn">+ Thêm danh mục</button>
      </div>

      <div className="category-list">
        {categories.map((category, index) => (
          <div key={index} className="category-item">
            {category}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;