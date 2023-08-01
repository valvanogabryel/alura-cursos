function extractLinks(linksArray) {
  return linksArray.map((link) => Object.values(link).join());
}

async function validateURLs(urlsArray) {
  const statuses = await Promise.all(
    urlsArray.map(async (url) => {
      const res = await fetch(url);
      return res.status;
    })
  );

  return statuses;
}

export default async function validateList(linksList) {
  const links = extractLinks(linksList);
  const statuses = await validateURLs(links);

  return linksList.map((link, index) => {
    return {
      ...link,
      status: statuses[index],
    };
  });
}
