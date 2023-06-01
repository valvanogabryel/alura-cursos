import Link from "next/link";
import { Title } from "../components/Title";

export default function HomePage() {
  return (
    <div>
      <Title as="h1">Home Page</Title>
      <Link href="/about">Ir para a página sobre</Link>
    </div>
  );
}
