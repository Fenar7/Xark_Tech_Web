import groq from "groq";

import { client } from "./client";

export type ApplicationItem = {
  title: string;
  subtext: string;
  image: string;
};

type RawApplicationItem = {
  title?: string;
  subtext?: string;
  image?: string | null;
};

const APPLICATIONS_QUERY = groq`
  *[_type in ["application", "operateItem"]] | order(_createdAt desc) {
    title,
    subtext,
    "image": mainImage.asset->url
  }
`;

const FALLBACK_IMAGE = "/images/about-section-image.png";

const normalizeApplications = (items: RawApplicationItem[]): ApplicationItem[] => {
  return items
    .filter((item) => typeof item.title === "string" && typeof item.subtext === "string")
    .map((item) => ({
      title: item.title as string,
      subtext: item.subtext as string,
      image: item.image || FALLBACK_IMAGE,
    }));
};

export const getApplications = async (limit?: number): Promise<ApplicationItem[]> => {
  try {
    const items = await client.fetch<RawApplicationItem[]>(
      APPLICATIONS_QUERY,
      {},
      { next: { revalidate: 60 } },
    );

    const normalized = normalizeApplications(items);

    if (typeof limit === "number") {
      return normalized.slice(0, limit);
    }

    return normalized;
  } catch {
    return [];
  }
};

