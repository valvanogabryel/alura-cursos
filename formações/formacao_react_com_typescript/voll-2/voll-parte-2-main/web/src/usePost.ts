import { useState } from "react";

export default function usePost() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [token, setToken] = useState("");

  async function signUpData<T>({
    endpoint,
    data,
  }: {
    endpoint: string;
    data: T;
  }) {
    try {
      const response = await fetch(`http://localhost:8080/${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      setSuccess(true);
      const convertedResponse = await response.json();
      setToken(convertedResponse.token);
    } catch (error) {
      setError("Não foi possível enviar os dados");
    }
  }

  return {
    signUpData,
    error,
    success,
    token,
  };
}
