import { useState } from "react";

export default function usePost() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function signUpData<T>({
    endpoint,
    data,
  }: {
    endpoint: string;
    data: T;
  }) {
    await fetch(`http://localhost:8080/${endpoint}`, {
      method: "POST",
      body: JSON.stringify(data),
    });
  }
}
