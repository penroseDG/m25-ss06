import React from 'react';
import Link from 'next/'
export default function Categories() {
  return (
    <div>
      <h1>Shop Categories</h1>
      <p>Danh sách các danh mục sản phẩm sẽ được hiển thị ở đây.</p>
      <li><Link href="/shop/products">Sản phẩm</Link></li>

    </div>
  );
}
link