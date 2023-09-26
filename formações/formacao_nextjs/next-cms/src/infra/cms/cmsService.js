const TOKEN = process.env.DATO_TOKEN;

export async function cmsService({ query }) {
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
