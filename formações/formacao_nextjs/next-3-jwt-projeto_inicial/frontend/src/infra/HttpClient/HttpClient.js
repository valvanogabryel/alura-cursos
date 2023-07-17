export async function HttpClient(fetchUrl, fetchOptions) {
  return fetch(fetchUrl, {
    ...fetchOptions,
    headers: {
      "Content-Type": "application/json",
      ...fetchOptions.headers,
    },
    body: fetchOptions.body && JSON.stringify(fetchOptions.body),
  }).then(async (response) => {
    return {
      ok: response.ok,
      body: await response.json(),
    };
  });
}
