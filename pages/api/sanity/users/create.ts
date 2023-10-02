// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getClient } from "../../../../services/sanity/client";
import slugify from "slugify";

type Data = {
  body: any;
  user: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { body } = req;
  console.log("api, create body", body);
  const slug = {
    current: `${slugify(body._id, { lower: true })}`,
    _type: "slug",
  };
  const doc = {
    _type: "user",
    slug,
    ...body,
  };
  const sanityClient = getClient();
  const user = await sanityClient.createIfNotExists(doc);
  // console.log("api, user list", list);
  res.status(200).json({ body, user });
}
