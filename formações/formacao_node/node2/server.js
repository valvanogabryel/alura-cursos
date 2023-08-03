import http from "http";

const port = 8080;

const routes = {
  "/": "Curso de Node",
  "/livros": "Lista de Livros",
  "/autores": "Lista de Autores",
};

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });

  res.end(routes[req.url] || "Page");
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
