import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { Image } from "@sanity/types";
import {
  SANITY_PROJECT_ID,
  SANITY_DATASET,
  SANITY_API_VERSION,
} from "../../shared/config";

export const client = createClient({
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
  useCdn: true, // `false` if you want to ensure fresh data
  apiVersion: SANITY_API_VERSION, // use a UTC date in YYYY-MM-DD format
});

const builder = imageUrlBuilder(client);

export function urlFor(source: Image) {
  return builder.image(source);
}
