import { groq } from "next-sanity";

export const getAllPRoductsQuery = groq`*[_type == 'product'] |order(name asc) {
  url,
  qty,
  comments
}`;
