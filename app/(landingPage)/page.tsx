import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import image from "@/public/logo.png";

export default function Home() {
  return (
    <div className="mt-24 ">
      <div className="flex justify-center items-center mb-4">
        <Image src={image} alt="logo" className="h-24 w-24 sm:h-40 sm:w-40" />
      </div>
      <p className="text-center mb-2 text-xl font-bold">
        Chatgpt AI-toolKit (unprotected)
      </p>
      <p className="text-center mb-4 text-lg font-bold">
        Made by : Ahmad Bilal Faroooqi
      </p>
      <div className="flex justify-center items-center">
        <Link href={"/sign-in"}>
          <Button className="ml-5">Login</Button>
        </Link>
        <Link href={"/sign-up"}>
          <Button className="ml-5">Register</Button>
        </Link>
      </div>
    </div>
  );
}
