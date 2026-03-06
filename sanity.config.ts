import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";

import { dataset, projectId } from "./sanity/env";
import { schemaTypes } from "./sanity/schemaTypes";

export default defineConfig({
  name: "default",
  title: "Xark Tech Studio",
  projectId,
  dataset,
  basePath: "/studio",
  plugins: [
    structureTool({
      structure: (S, context) =>
        S.list()
          .title("Content")
          .items([
            // Orderable Blog Posts list with drag handles
            orderableDocumentListDeskItem({
              type: "blogPost",
              title: "Blog Post",
              S,
              context,
            }),
            // All other document types rendered normally
            ...S.documentTypeListItems().filter(
              (item) => item.getId() !== "blogPost"
            ),
          ]),
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
});
