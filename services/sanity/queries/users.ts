import { groq } from "next-sanity";

export const getUserBySlugQuery = groq`*[_type == "user" && _id == $slug][0]`;

export const getAllUsers = groq`*[_type == "user"]`;

export const getUserListsByUserSlugQuery = groq`*[_type == "list" && user._ref == $slug]`;

export const getUserListBySlugsQuery = groq`*[_type == "list" && user._ref == $userSlug && _id == $listSlug][0]`;

export const getListByIdQuery = groq`*[_type == "list" && _id == $id][0]`;
