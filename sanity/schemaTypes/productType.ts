import { defineField, defineType } from "sanity";

export const productType = defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "productTypeRef",
      title: "Product Type",
      type: "reference",
      to: [{ type: "productTypeOption" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "productApplicationRef",
      title: "Product Application",
      type: "reference",
      to: [{ type: "productApplicationOption" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "cardIcon",
      title: "Card Icon",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "cardSubtext",
      title: "Card Subtext",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "keyPoints",
      title: "Card Key Points",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule) => Rule.required().min(3).max(3),
    }),
    defineField({
      name: "heroTitle",
      title: "Hero Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "heroSubtext",
      title: "Hero Subtext",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "heroImage",
      title: "Hero Image",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "introductionTitle",
      title: "Introduction Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "introductionSubtext",
      title: "Introduction Subtext",
      type: "text",
      rows: 5,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "datasheetPdf",
      title: "Datasheet PDF",
      type: "file",
      options: {
        accept: ".pdf",
      },
    }),
    defineField({
      name: "drawingPdf",
      title: "Drawing PDF",
      type: "file",
      options: {
        accept: ".pdf",
      },
    }),
    defineField({
      name: "modelPdf",
      title: "3D Model PDF",
      type: "file",
      options: {
        accept: ".pdf",
      },
    }),
    defineField({
      name: "overview",
      title: "Overview",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "specColumnOneTitle",
      title: "Specifications Column 1 Title",
      type: "string",
      initialValue: "Specification",
    }),
    defineField({
      name: "specColumnTwoTitle",
      title: "Specifications Column 2 Title",
      type: "string",
      initialValue: "Details",
    }),
    defineField({
      name: "specRows",
      title: "Specifications Rows",
      type: "array",
      of: [
        defineField({
          name: "row",
          title: "Row",
          type: "object",
          fields: [
            defineField({
              name: "label",
              title: "Column 1 Value",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "value",
              title: "Column 2 Value",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "whereFitsTitle",
      title: "Where It Fits Title",
      type: "string",
    }),
    defineField({
      name: "whereFitsSubtext",
      title: "Where It Fits Subtext",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "whereFitsItems",
      title: "Where It Fits Items",
      type: "array",
      of: [
        defineField({
          name: "item",
          title: "Item",
          type: "object",
          fields: [
            defineField({
              name: "image",
              title: "Image",
              type: "image",
              options: { hotspot: true },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "subtext",
              title: "Subtext",
              type: "text",
              rows: 3,
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "seoTitle",
      title: "SEO Title",
      type: "string",
      validation: (Rule) => Rule.max(70),
    }),
    defineField({
      name: "seoDescription",
      title: "SEO Description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.max(160),
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "cardIcon",
      typeTitle: "productTypeRef.title",
      appTitle: "productApplicationRef.title",
    },
    prepare(value) {
      const typeTitle = typeof value.typeTitle === "string" ? value.typeTitle : "No type";
      const appTitle = typeof value.appTitle === "string" ? value.appTitle : "No application";

      return {
        title: value.title,
        media: value.media,
        subtitle: `${typeTitle} | ${appTitle}`,
      };
    },
  },
});
