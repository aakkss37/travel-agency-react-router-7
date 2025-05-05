import React from "react";
import { Outlet } from "react-router";

type Props = {};

const AdminLayout = (props: Props) => {
  return (
    <div className="admin-layout">
      <aside className="w-full max-w-[270px] hidden lg:block">
        <ul>
          <li>Dashboard</li>
          <li>Users</li>
          <li>Settings</li>
        </ul>
      </aside>
      <aside className="admin-layout__content">
        <header className="admin-layout__content__header">
          <h1>Admin Dashboard</h1>
        </header>
        <main className="admin-layout__content__main">
          <Outlet />
        </main>
      </aside>
    </div>
  );
};

export default AdminLayout;
