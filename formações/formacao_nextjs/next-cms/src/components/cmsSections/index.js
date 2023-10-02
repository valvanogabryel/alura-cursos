import { Menu } from "../commons/Menu";
import { Footer } from "../commons/Footer";
import { SEOBlock } from "./SEOBlock";

import { PagehomeHeroSection } from "../cmsSections/PagehomeHerosectionRecord";
import { PageFAQDisplayQuestionScreen } from "./PageFAQDisplayQuestionScreen";

export const cmsSections = {
  CommonSeoBlockRecord: SEOBlock,
  CommonMenuRecord: (props) => <Menu {...props} />,
  PagefaqDisplayquestionRecord: PageFAQDisplayQuestionScreen,
  PagehomeHerosectionRecord: PagehomeHeroSection,
  CommonFooterRecord: (props) => <Footer {...props} />,
};
