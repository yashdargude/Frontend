import {
  HiCalendar,
  HiCubeTransparent,
  HiOutlineUserCircle,
  HiClock,
  HiOutlineExternalLink,
} from "react-icons/hi";
import { NavLink } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";

const navList = [
  {
    name: "Appointments",
    path: "/dashboard/counseleeappointments",
    icon: HiCalendar,
  },
  {
    name: "Schedule",
    path: "/dashboard/scheduleappointments",
    icon: HiClock,
  },
  {
    name: "Profile",
    path: "/dashboard/profile",
    icon: HiOutlineUserCircle,
  },
];

const normalLink =
  "flex items-center justify-start gap-2 hover:bg-brightred hover:bg-opacity-15 px-3 py-2 rounded-md";

const activeLink =
  "flex  text-brightred items-center justify-start gap-2 bg-brightred bg-opacity-15 px-3 py-2 rounded-lg";

function Sidebar() {
  return (
    <>
      <div className="relative w-24 lg:w-56 flex flex-col  min-w-10 border-r-2 border-brightred h-screen px-4">
        <NavLink to="/" className="flex items-center justify-center gap-2">
          <HiCubeTransparent className="text-brightred w-16 h-16" />
          <h1 className="text-lg text-black font-bold tracking-widest">
            FindYourGuide
          </h1>
        </NavLink>
        <div className="w-full border-b-2 border-gray-300"></div>
        <div className="w-full mt-6 ">
          <ul className="flex flex-col gap-2">
            {navList.map((item, index) => (
              <li key={index} className="w-full">
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  <item.icon className="text-brightred w-5 h-5" />

                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="absolute w-full bottom-[5%] left-[50%] -translate-x-[50%] px-2">
          <Card className="m-2 bg-brightred rounded-md">
            <CardContent>
              <div className="mt-3">
                <h2 className="text-xl text-white font-bold tracking-wide">
                  Help center
                </h2>
                <h5 className="text-sm text-white font-semibold text-opacity-60">
                  Get best service
                </h5>
              </div>
            </CardContent>
            <CardFooter className="w-full">
              <Button className="w-full bg-white bg-opacity-85 text-black hover:bg-amber-100">
                <HiOutlineExternalLink className="text-brightred w-5 h-5 mr-3" />
                Contact us
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
