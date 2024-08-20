import React from 'react';
import Link from 'next/link'
export default function Settings() {
  return (
    <div>
      <h1>User Settings</h1>
      <p>Cài đặt người dùng sẽ được hiển thị ở đây.</p>
      <ul>
          <li><Link href="/shop/products">Sản phẩm</Link></li>
          <li><Link href="/user/profile">Trang cá nhân</Link></li>
          <li><Link href="/user/settings">Cài đặt người dùng</Link></li>
        </ul>
    </div>
  );
}
