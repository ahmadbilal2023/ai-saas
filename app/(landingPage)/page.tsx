import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <p>DashBorad Page (unprotected)</p>
      <Link href={"/sign-in"}>
      <Button className="ml-5">Login</Button>
      </Link>
      <Link href={"/sign-up"}>
      <Button className="ml-5">Register</Button>
      </Link>
    </div>
  );
}
