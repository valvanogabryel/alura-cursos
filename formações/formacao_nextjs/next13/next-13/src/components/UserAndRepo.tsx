export async function UserAndRepo() {
  const [user, repo] = await Promise.all([
    fetch("https://api.github.com/users/valvanogabryel"),
    fetch("https://api.github.com/users/valvanogabryel/repos"),
  ]);
  //! SEMPRE QUE FOR FAZER *DUAS* REQUISIÇÕES, E A SEGUNDA REQUISIÇÃO NÃO PRECISARÁ USAR O DADO DA PRIMEIRA, Promise.all([]) é mais indicado...

  return (
    <div>
      <h1>User and Repo</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <pre>{JSON.stringify(repo, null, 2)}</pre>
    </div>
  );
}
