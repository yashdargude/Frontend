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
import registerImg from "../assets/Sign up-bro.svg";
import { NavLink } from "react-router-dom";
import { GrSchedulePlay } from "react-icons/gr";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

function Login() {
  const [hide, setHide] = useState("password");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleHidePassword = () => {
    setHide(hide === "password" ? "text" : "password");
  };

  return (
    <section className="flex flex-col lg:flex-row w-full h-screen ">
      <div className="w-full lg:w-1/2 px-20 py-16 ">
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
            <CardTitle>Create your account</CardTitle>
            <CardDescription>to access our dashboard</CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    type="email"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Input
                      type={hide}
                      id="password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    {hide == "password" ? (
                      <AiFillEyeInvisible
                        className="w-4 h-4 lg:w-5 lg:h-5 text-gray-400 absolute right-2 top-[50%] -translate-y-[50%] cursor-pointer"
                        onClick={handleHidePassword}
                      />
                    ) : (
                      <AiFillEye
                        className="w-4 h-4 lg:w-5 lg:h-5 text-gray-400 absolute right-2 top-[50%] -translate-y-[50%] cursor-pointer"
                        onClick={handleHidePassword}
                      />
                    )}
                  </div>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="w-full flex flex-col items-start">
            <Button className="w-full bg-brightred">Register</Button>
            <div className="flex gap-1 mt-2">
              <p className="text-sm text-start text-gray-500">
                Do not have an account?
              </p>
              <NavLink
                to="/register"
                className="text-brightred underline text-sm"
              >
                Register
              </NavLink>
            </div>
          </CardFooter>
        </Card>
      </div>
      <div className="hidden lg:flex items-center justify-center w-full lg:w-1/2 bg-brightred bg-opacity-5">
        <img src={registerImg} alt="Register hero image" className="w-[70%]" />
      </div>
    </section>
  );
}

export default Login;
