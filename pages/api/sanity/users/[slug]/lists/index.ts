// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getClient } from "../../../../../../services/sanity/client";
import { getUserListsByUserSlugQuery } from "../../../../../../services/sanity/queries/users";

type Data = {
  user: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { slug } = req.query;
  console.log("api, slug", slug);
  const sanityClient = getClient();
  const user = await sanityClient.fetch(getUserListsByUserSlugQuery, { slug });
  console.log("api, user lists", user);
  res.status(200).json({ user });
}
