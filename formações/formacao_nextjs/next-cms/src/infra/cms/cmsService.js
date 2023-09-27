import getGlobal from "./getGlobal";

const TOKEN = process.env.DATO_TOKEN;

const baseURL = "https://graphql.datocms.com/";
const previewURL = `${baseURL}/preview`;

export async function cmsService({ query, preview }) {
  const url = preview ? previewURL : baseURL;

  try {
    const { data } = await fetch(url, {
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

    const globalContentResponse = await getGlobal(url);

    return {
      data: {
        ...data,
        globalContent: {
          ...globalContentResponse,
        },
      },
    };
  } catch (err) {
    throw new Error(JSON.stringify(err.message));
  }
}
