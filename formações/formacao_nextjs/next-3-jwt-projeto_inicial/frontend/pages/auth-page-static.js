import { useEffect, useState } from "react";
import { authService } from "../src/services/auth/authService";
import { useRouter } from "next/router";

function useSession() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    authService
      .getSession()
      .then((res) => {
        setSession(res);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return {
    data: session,
    loading,
    error,
  };
}

export default function AuthPageStatic(props) {
  const session = useSession();
  const router = useRouter();

  if (session.error) {
    router.push("/?error=401");
  }

  return (
    <div>
      <h1>Auth Page Static</h1>

      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  );
}
