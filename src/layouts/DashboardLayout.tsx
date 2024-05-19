import DashboardNav from "@/components/custom/DashboardNav";
import Sidebar from "@/components/custom/Sidebar";
import { Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="relative">
          <DashboardNav />
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default DashboardLayout;
