import { get } from "lodash";
import { createContext, useContext } from "react";

const CMSContext = createContext({
  cmsContent: {},
});

CMSContext.displayName = "Global CMS";

export default function CMSProvider({ cmsContent, children }) {
  return (
    <CMSContext.Provider value={{ cmsContent }}>{children}</CMSContext.Provider>
  );
}

export const getCMSContent = (path = "") => {
  const { cmsContent } = useContext(CMSContext);

  if (path === "") return cmsContent;

  const output = get(cmsContent, path);

  if (!output)
    throw new Error(
      `Não foi encontrado a chave: [${path}]. Revise sua query e tente novamente.`
    );

  return output;
};
