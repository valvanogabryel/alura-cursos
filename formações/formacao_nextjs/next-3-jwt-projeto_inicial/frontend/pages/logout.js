import { useRouter } from "next/router";
import { useEffect } from "react";
import { HttpClient } from "../src/infra/HttpClient/HttpClient";
import { tokenService } from "../src/services/auth/tokenService";

export default function LogoutPage() {
  const router = useRouter();

  useEffect(async () => {
    try {
      await HttpClient("/api/refresh", {
        method: "DELETE",
      });
      tokenService.remove();
      router.push("/");
    } catch (err) {
      alert(err.message);
    }
  }, []);

  return <div>Você será redirecionado em instantes...</div>;
}
