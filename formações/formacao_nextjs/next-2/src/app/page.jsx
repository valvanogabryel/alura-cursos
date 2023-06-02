import Link from "next/link";
import { Title } from "../components/Title";

export default function HomePage() {
  return (
    <div>
      <Title as="h1">Home Page</Title>
      <Link href="/about">Ir para a página sobre</Link>

      <ul>
        <li>
          <Link href="/posts/1">Post 1</Link>
        </li>
        <li>
          <Link href="/posts/2">Post 2</Link>
        </li>
        <li>
          <Link href="/posts/3">Post 3</Link>
        </li>
      </ul>
    </div>
  );
}
