import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import profileImg from "../assets/Profile data-pana.svg";
import { NavLink } from "react-router-dom";
import { GrSchedulePlay } from "react-icons/gr";
import { useEffect, useState } from "react";
import { CgSpinner } from "react-icons/cg";
import axios from "axios";

function CounselorProfile() {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const headers = {
      "Content-Type": "application/json",
      "auth-token": localStorage.getItem("auth-token"),
    };
    axios
      .get("/api/profile/counselordetails", { headers })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <section className="flex flex-col lg:flex-row w-full ">
        <div className="w-full lg:w-[70%] px-20 py-16 ">
          <div className="w-full">
            <NavLink to="/" className="flex items-center justify-start gap-2">
              <GrSchedulePlay className="text-brightred w-6 h-6" />
              <h1 className="text-2xl text-darkblue font-bold tracking-widest">
                FindYourGuide
              </h1>
            </NavLink>
          </div>
          <Card className="border-none w-full shadow-none bg-transparent">
            <CardHeader>
              <CardTitle>Create admin account</CardTitle>
              <CardDescription>only authorized individual</CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" id="email" />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="w-full flex flex-col items-start">
              <Button className="w-full bg-brightred" disabled={isLoading}>
                {isLoading && (
                  <CgSpinner className="mr-2 h-4 w-4 animate-spin" />
                )}
                Register
              </Button>
              <div className="flex gap-1 mt-2">
                <p className="text-sm text-start text-gray-500">
                  Do you already have an account?
                </p>
                <NavLink
                  to="/login"
                  className="text-brightred underline text-sm"
                >
                  Login
                </NavLink>
              </div>
            </CardFooter>
          </Card>
        </div>
        <div className="hidden lg:flex items-center justify-center w-full lg:w-[30%] bg-brightred bg-opacity-5">
          <img src={profileImg} alt="Profile hero image" className="w-[70%]" />
        </div>
      </section>
    </>
  );
}

export default CounselorProfile;
