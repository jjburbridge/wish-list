// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getClient } from "../../../../../services/sanity/client";
import { getUserBySlugQuery } from "../../../../../services/sanity/queries/users";

type Data = {
  user: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { slug } = req.query;
  const sanityClient = getClient();
  const user = await sanityClient.fetch(getUserBySlugQuery, { slug });
  res.status(200).json({ user });
}
