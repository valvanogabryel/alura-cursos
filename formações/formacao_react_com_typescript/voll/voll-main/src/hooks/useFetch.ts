import { useEffect, useState } from "react";
export default function useFetch<IProfessional>({
  endpoint,
}: {
  endpoint: string;
}) {
  const [data, setData] = useState<IProfessional | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`http://localhost:8080/${endpoint}`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => setError(error));
  }, [endpoint]);

  return { data, error };
}
