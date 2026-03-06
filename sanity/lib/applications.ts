import groq from "groq";

import { client } from "./client";

export type ApplicationItem = {
  title: string;
  previewText: string;
  image: string;
  body?: unknown[];
};

type RawApplicationItem = {
  title?: string;
  previewText?: string | null;
  image?: string | null;
  body?: unknown[] | null;
};

const APPLICATIONS_QUERY = groq`
  *[_type == "application"] | order(coalesce(sortOrder, 0) asc, _createdAt desc) {
    title,
    "previewText": pt::text(body[_type == "block"][0..0]),
    "image": mainImage.asset->url,
    body
  }
`;

const FALLBACK_IMAGE = "/images/about-section-image.png";

const normalizeApplications = (items: RawApplicationItem[]): ApplicationItem[] => {
  return items
    .filter((item) => typeof item.title === "string")
    .map((item) => ({
      title: item.title as string,
      previewText: typeof item.previewText === "string" ? item.previewText : "",
      image: item.image || FALLBACK_IMAGE,
      body: Array.isArray(item.body) ? item.body : undefined,
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
