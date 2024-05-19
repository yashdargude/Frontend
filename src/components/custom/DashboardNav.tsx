import { HiOutlineBell, HiMenu } from "react-icons/hi";
import { Dispatch, SetStateAction } from "react";

interface navProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
  open: boolean;
}

function DashboardNav({ setOpen, open }: navProps) {
  const toggleOpen = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className="flex items-center justify-between px-6 gap-4 bg-white w-full h-16 border-b-2 border-brightred border-opacity-15">
        <div>
          <HiMenu
            className="w-5 h-5 text-brightred cursor-pointer"
            onClick={toggleOpen}
          />
        </div>
        <div className="flex items-center justify-center gap-4">
          <div>
            <HiOutlineBell className="w-6 h-6 text-brightred" />
          </div>

          <div>
            <h1 className=" bg-brightred w-8 h-8 grid place-content-center rounded-full text-white font-bold">
              R
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardNav;
