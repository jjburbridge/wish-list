// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getClient } from "../../../../services/sanity/client";
import { getAllUsers } from "../../../../services/sanity/queries/users";

type Data = {
  users: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const sanityClient = getClient();
  const users = await sanityClient.fetch(getAllUsers);

  res.status(200).json({ users });
}
