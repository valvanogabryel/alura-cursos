import { Bai_Jamjuree as BaiJamjuree } from "next/font/google";

const baiJamjuree = BaiJamjuree({
  subsets: ["latin"],
  weight: "300",
  variable: "--font-baijamjuree",
});

export const metadata = {
  title: "Explorando o Next",
  description: "Página teste para estudar um pouco de nextJS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
      </head>
      <body className={baiJamjuree.className}>{children}</body>
    </html>
  );
}
