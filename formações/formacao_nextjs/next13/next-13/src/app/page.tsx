import { User } from "@/components/User";
import { cookies, headers } from "next/headers";
import Link from "next/link";

import { useRouter } from "next/navigation";

export default async function Home() {
  // const router = useRouter();

  const userCookies = cookies();
  const userHeaders = headers();

  // console.log(router);

  return (
    <div>
      <h1>Home</h1>
      {/* @ts-expect-error Async Server Component */}
      <User />
      <Link href="/dashboard">Dashboard</Link>

      <div>
        {JSON.stringify(userCookies.getAll(), null, 2)}
        {JSON.stringify(userHeaders.entries(), null, 2)}
      </div>
    </div>
  );
}
