import DashboardNav from "@/components/custom/DashboardNav";
import Sidebar from "@/components/custom/Sidebar";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

function DashboardLayout() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="relative flex">
        <div
          className={`fixed ${
            open ? "-translate-x-0" : "-translate-x-96"
          } lg:translate-x-0 transition-all  lg:left-0 top-0 z-50`}
        >
          <Sidebar />
        </div>
        <div className="ml-0 lg:ml-[16rem] relative w-full">
          <div className="fixed top-0 right-0 w-full">
            <DashboardNav setOpen={setOpen} open={open} />
          </div>
          <div className="mt-16">
            <Outlet />
          </div>
        </div>
        {open && (
          <div
            className="h-screen w-screen absolute left-0 top-0 bg-black bg-opacity-70 "
            onClick={() => setOpen(!open)}
          ></div>
        )}
      </div>
    </>
  );
}

export default DashboardLayout;
