import { Title } from "@/components/Title";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Title as="h1">Alura cases - Home</Title>
      <Link href="/faq">Ir para a FAQ</Link>
    </div>
  )
}
