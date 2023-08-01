import http from "http";

const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/home") {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });
    res.end("<h1>Hello World</h1>");
  }

  if (req.url === "/users") {
    const users = [
      {
        name: "John Doe",
        email: "john@doe.com",
        age: 34,
      },
      {
        name: "Jane Doe",
        email: "jane@doe.com",
        age: 24,
      },
      {
        name: "Jesse Doe",
        email: "jesse@doe.com",
        age: 20,
      },
    ];

    res.writeHead(200, {
      "Content-Type": "application/json",
    });

    res.end(JSON.stringify(users));
  }
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
