import { useState } from "react";

export default function usePost() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  async function signUpData<T>({
    endpoint,
    data,
  }: {
    endpoint: string;
    data: T;
  }) {
    try {
      await fetch(`http://localhost:8080/${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      setSuccess(true);
    } catch (error) {
      setError("Não foi possível enviar os dados");
    }
  }

  return {
    signUpData,
    error,
    success,
  };
}
