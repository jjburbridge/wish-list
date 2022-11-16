import { JSDOM } from "jsdom";

export const scrape = async (url: string) => {
  const dom = await JSDOM.fromURL(url);
  const doc = dom.window.document;

  const title =
    doc.querySelector("meta[property='og:title']")?.getAttribute("content") ??
    null;
  const image =
    doc.querySelector("meta[property='og:image']")?.getAttribute("content") ??
    null;
  const site =
    doc
      .querySelector("meta[property='og:site_name']")
      ?.getAttribute("content") ?? null;
  const description =
    doc
      .querySelector("meta[property='og:description']")
      ?.getAttribute("content") ?? null;
  console.log({ url, title, image, site, description });
  return {
    title,
    image,
    site,
    description,
    url,
  };
};
