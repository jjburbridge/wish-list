import { JSDOM } from "jsdom";

export const scrape = async (url: string) => {
  console.log("url", url);
  const dom = await JSDOM.fromURL(url);
  const doc = dom.window.document;
  const title = doc
    .querySelector("meta[property='og:title']")
    ?.getAttribute("content");
  const image = doc
    .querySelector("meta[property='og:image']")
    ?.getAttribute("content");
  const site = doc
    .querySelector("meta[property='og:site_name']")
    ?.getAttribute("content");
  const description = doc
    .querySelector("meta[property='og:description']")
    ?.getAttribute("content");

  return {
    title,
    image,
    site,
    description,
    url,
  };
};
