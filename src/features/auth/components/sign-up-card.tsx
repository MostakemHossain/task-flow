import { DottedSeparator } from "@/components/dotted-separator";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SignUpCard = () => {
  return (
    <Card className="w-full h-full md:w-[487px] border-none shadow-none">
      <CardHeader className="flex items-center justify-center text-center p-7">
        <CardTitle className="text-2xl">Sign Up</CardTitle>
        <CardDescription>
          By singing up, you agree to our{" "}
          <Link href={"/privacy"}>
            <span className="text-blue-700">Privacy Policy</span>
          </Link>{" "}
          and
          <Link href={"/terms"}>
            <span className="text-blue-700">Terms & Service</span>
          </Link>{" "}
        </CardDescription>
      </CardHeader>
      <div className="px-7 mb-2">
        <DottedSeparator />
      </div>
      <CardContent className="p-7">
        <form className="space-y-4">
          <Input
            required
            type="name"
            placeholder="Enter Your Name"
            value={""}
            onChange={() => {}}
            disabled={false}
          />
          <Input
            required
            type="email"
            placeholder="Enter Your email"
            value={""}
            onChange={() => {}}
            disabled={false}
          />
          <Input
            required
            type="password"
            placeholder="Enter Your password"
            value={""}
            onChange={() => {}}
            min={8}
            max={256}
            disabled={false}
          />
          <Button disabled={false} size={"lg"} className="w-full">
            Login
          </Button>
        </form>
      </CardContent>
      <div className="">
        <div className="px-7 mb-2">
          <DottedSeparator />
        </div>
        <CardContent className="p-7 flex flex-col gap-y-4">
          <Button
            disabled={false}
            variant={"secondary"}
            size={"lg"}
            className="w-full"
          >
            <FcGoogle className="mr-2 size-5" />
            Login With Google
          </Button>
          <Button
            disabled={false}
            variant={"secondary"}
            size={"lg"}
            className="w-full"
          >
            <FaGithub className="mr-2 size-5" />
            Login With Github
          </Button>
        </CardContent>
      </div>
    </Card>
  );
};

export default SignUpCard;
