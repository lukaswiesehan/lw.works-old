// contentlayer.config.ts
import { defineDocumentType, defineNestedType, makeSource } from "contentlayer/source-files";
import { format } from "date-fns";
import { de } from "date-fns/locale/index.js";
import { toMarkdown } from "mdast-util-to-markdown";
import { mdxToMarkdown } from "mdast-util-mdx";
import { bundleMDX } from "mdx-bundler";

// utils/blog/sluggify-title.ts
var getNodeText = (node) => {
  if (typeof node === "string")
    return node;
  if (typeof node === "number")
    return node.toString();
  if (node instanceof Array)
    return node.map(getNodeText).join("");
  if (typeof node === "object" && node?.props?.children)
    return getNodeText(node.props.children);
  return "";
};
var sluggifyTitle = (node) => {
  const re = /[^\w\s]/g;
  const title = getNodeText(node);
  return title.trim().toLowerCase().replace(re, "").replace(/\s+/g, "-");
};

// contentlayer.config.ts
var Author = defineNestedType(() => ({
  name: "Author",
  fields: {
    name: { type: "string", required: true },
    description: { type: "string", required: true },
    avatar: { type: "string", required: true },
    linkedin: { type: "string", required: false },
    instagram: { type: "string", required: false },
    twitter: { type: "string", required: false }
  }
}));
var computedFields = {
  slug: {
    type: "string",
    resolve: (post) => post._raw.flattenedPath
  },
  writtenDate: {
    type: "string",
    resolve: (post) => format(new Date(post.date), "dd. MMMM yyyy", { locale: de })
  },
  headings: {
    type: "json",
    resolve: async (post) => {
      const headings = [];
      await bundleMDX({
        source: post.body.raw,
        mdxOptions: (opts) => {
          opts.remarkPlugins = [...opts.remarkPlugins ?? [], tocPlugin(headings)];
          return opts;
        }
      });
      return headings;
    }
  }
};
var BlogPost = defineDocumentType(() => ({
  name: "BlogPost",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true
    },
    date: {
      type: "date",
      description: "The date of the post",
      required: true
    },
    excerpt: {
      type: "string",
      description: "Short intro to the post",
      required: true
    },
    author: {
      type: "nested",
      of: Author,
      description: "The author of the post",
      required: true
    }
  },
  //@ts-ignore
  computedFields
}));
var tocPlugin = (toc) => () => {
  return (node) => {
    for (const element of node.children.filter((_) => _.type === "heading" || _.name === "OptionsTable" || _.name === "Heading")) {
      if (element.type === "heading") {
        const heading = toMarkdown({ type: "paragraph", children: element.children }, { extensions: [mdxToMarkdown()] }).trim().replace(/<.*$/g, "").replace(/\\/g, "").trim();
        toc.push({ level: element.depth, heading, slug: sluggifyTitle(heading) });
      }
    }
  };
};
var contentlayer_config_default = makeSource({
  contentDirPath: "content/blog",
  documentTypes: [BlogPost]
});
export {
  BlogPost,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-G4YST3HZ.mjs.map
