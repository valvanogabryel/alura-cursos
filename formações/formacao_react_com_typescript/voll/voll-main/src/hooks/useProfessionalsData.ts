import IProfessional from "../interfaces/IIProfessional";
import useFetch from "./useFetch";

const useProfessionalsData = () => {
  return useFetch<IProfessional[]>({
    endpoint: "profissionais",
  });
};

export default useProfessionalsData;
