import { Suspense } from "react";
import { Repo } from "@/components/Repo";
import { Counter } from "./Counter";

export async function User() {
  const response = await fetch("https://api.github.com/users/valvanogabryel", {
    // next: {
    //   revalidate: 30,
    // },
    cache: "no-store",
  });
  const user = await response.json();

  return (
    <div>
      <h1>User</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <Suspense fallback={<p>Carregando</p>}>
        {/* @ts-expect-error Async Server Component */}
        <Repo />
      </Suspense>

      <Counter />
    </div>
  );
}
