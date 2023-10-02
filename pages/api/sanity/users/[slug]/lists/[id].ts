// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getClient } from "../../../../../../services/sanity/client";
import { getListByIdQuery } from "../../../../../../services/sanity/queries/users";

type Data = {
  list: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { slug, id } = req.query;
  const sanityClient = getClient();
  const list = await sanityClient.fetch(getListByIdQuery, { id });
  res.status(200).json({ list });
}
