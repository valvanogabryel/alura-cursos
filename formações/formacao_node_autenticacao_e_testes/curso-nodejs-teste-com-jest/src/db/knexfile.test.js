module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./dev.sqlite3",
    },
    useNullAsDefault: true,
  },
  test: {
    client: "sqlite3",
    connection: ":memory:", // Banco de dados SQLite em memória
    useNullAsDefault: true,
  },
};
