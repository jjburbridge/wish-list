import { JSDOM } from "jsdom";

export const scrape = async (url: string) => {
  const dom = await JSDOM.fromURL(url);
  const doc = dom.window.document;
  console.log(url, doc);
  const title =
    doc.querySelector("meta[property='og:title']")?.getAttribute("content") ??
    doc.querySelector("meta[property=' og:title']")?.getAttribute("content");
  console.log(doc.querySelector("meta[property=' og:title']"));
  const image =
    doc.querySelector("meta[property='og:image']")?.getAttribute("content") ??
    doc.querySelector("meta[property=' og:image']")?.getAttribute("content");
  const site =
    doc
      .querySelector("meta[property='og:site_name']")
      ?.getAttribute("content") ??
    doc
      .querySelector("meta[property=' og:site_name']")
      ?.getAttribute("content");
  const description =
    doc
      .querySelector("meta[property='og:description']")
      ?.getAttribute("content") ??
    doc
      .querySelector("meta[property=' og:description']")
      ?.getAttribute("content");
  const price =
    doc
      .querySelector("meta[property='og:price:amount']")
      ?.getAttribute("content") ??
    doc
      .querySelector("meta[property=' og:price:amount']")
      ?.getAttribute("content");
  const icon =
    doc.querySelector("link[rel='icon']")?.getAttribute("href") ??
    doc.querySelector("link[rel='shortcut icon']")?.getAttribute("href");
  return {
    title: title ?? null,
    image: image ?? null,
    site: site ?? null,
    description: description ?? null,
    price: price ?? null,
    icon: icon ?? null,
    url,
  };
};
