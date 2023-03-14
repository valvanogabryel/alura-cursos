import { useRecoilValue } from "recoil"
import { errorMessage } from "../atom"

export const useErrorMessage = () => {
  const message = useRecoilValue(errorMessage);
  return message;
}