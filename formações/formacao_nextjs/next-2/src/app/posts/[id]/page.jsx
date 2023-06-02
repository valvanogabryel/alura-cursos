import Link from "next/link";

export default function Post({ params }) {
  return (
    <div>
      <h1>{id}</h1>
      <Link href="/">Voltar</Link>
    </div>
  );
}
