

export async function Repo() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
    cache: "no-store",
  });
  const todo = await response.json();

  return (
    <div>
      <h1>To dos</h1>
      <pre>{JSON.stringify(todo, null, 2)}</pre>
    </div>
  );
}
