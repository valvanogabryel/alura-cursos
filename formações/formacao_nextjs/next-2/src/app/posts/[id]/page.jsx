export default function Post({ params }) {
  return (
    <div>
      <h1>Post ID:</h1>
      {params.id}
    </div>
  );
}
