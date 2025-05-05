import React from "react";
import { Outlet } from "react-router";
import pkg from "@syncfusion/ej2-react-navigations";
const { SidebarComponent } = pkg;
import NavItems from "components/NavItems";

type Props = {};

const AdminLayout = (props: Props) => {
  return (
    <div className="admin-layout">
      <aside className="w-full max-w-[270px] hidden lg:block">
        <SidebarComponent>
          <NavItems />
        </SidebarComponent>
      </aside>
      <aside className="admin-layout__content">
        <Outlet />
      </aside>
    </div>
  );
};

export default AdminLayout;
