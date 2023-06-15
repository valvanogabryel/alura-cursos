import IQuery from "../interfaces/IQuery";
import useFetch from "./useFetch";

const useQueryData = () => {
  return useFetch<IQuery[]>({
    endpoint: "consultas",
  });
};

export default useQueryData;
