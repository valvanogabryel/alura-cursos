interface ProductProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: ProductProps) {
  return {
    title: `Produto ${params.id}`,
  };
}

export default function Product({ params }: ProductProps) {
  return (
    <div>
      <h1>Product: {params.id}</h1>
    </div>
  );
}
