import { FacebookIcon, TwitterIcon, InstagramIcon } from "lucide-react";
import "./Footer.modules.scss";

const iconProps = {
  color: "white",
  size: 24,
};

export function Footer() {
  return (
    <footer className="footer">
      <div>
        <FacebookIcon {...iconProps} />
        <TwitterIcon {...iconProps} />
        <InstagramIcon {...iconProps} />
      </div>
      <span>Desenvolvido por Alura.</span>
    </footer>
  );
}
