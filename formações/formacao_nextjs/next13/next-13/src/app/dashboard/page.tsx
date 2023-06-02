import { UserAndRepo } from "@/components/UserAndRepo";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      {/* @ts-expect-error */}
      <UserAndRepo />
      <Link href="/">Voltar</Link>
    </div>
  );
}
