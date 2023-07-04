import { useState } from "react";

export default function usePost() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [token, setToken] = useState("");

  async function signUpData<T>({
    endpoint,
    data,
    token,
  }: {
    endpoint: string;
    data: T;
    token?: string;
  }) {
    const headers: HeadersInit = {
      "Content-Type": "application/json",
    };

    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    try {
      const response = await fetch(`http://localhost:8080/${endpoint}`, {
        method: "POST",
        headers,
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
