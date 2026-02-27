import groq from "groq";

import { client } from "./client";

export type OperateItem = {
  title: string;
  subtext: string;
  image: string;
};

type RawOperateItem = {
  title?: string;
  subtext?: string;
  image?: string | null;
};

const OPERATE_ITEMS_QUERY = groq`
  *[_type == "operateItem"] | order(_createdAt desc) {
    title,
    subtext,
    "image": mainImage.asset->url
  }
`;

const FALLBACK_IMAGE = "/images/about-section-image.png";

const normalizeOperateItems = (items: RawOperateItem[]): OperateItem[] => {
  return items
    .filter((item) => typeof item.title === "string" && typeof item.subtext === "string")
    .map((item) => ({
      title: item.title as string,
      subtext: item.subtext as string,
      image: item.image || FALLBACK_IMAGE,
    }));
};

export const getOperateItems = async (limit?: number): Promise<OperateItem[]> => {
  try {
    const items = await client.fetch<RawOperateItem[]>(
      OPERATE_ITEMS_QUERY,
      {},
      { next: { revalidate: 60 } },
    );
    const normalized = normalizeOperateItems(items);

    if (typeof limit === "number") {
      return normalized.slice(0, limit);
    }

    return normalized;
  } catch {
    return [];
  }
};
