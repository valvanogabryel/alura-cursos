const TOKEN = process.env.DATO_TOKEN;

const query = `
query {
  glogalFooter {
    description
  }
}
`;

export default async function getGlobal() {
  try {
    const { data } = await fetch("https://graphql.datocms.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${TOKEN}`,
      },
      body: JSON.stringify({ query }),
    }).then(async (serverResponse) => {
      const body = await serverResponse.json();

      if (!body.errors) return body;

      throw new Error(JSON.stringify(body.errors));
    });

    return {
      data,
    };
  } catch (err) {
    throw new Error(JSON.stringify(err.message));
  }
}
