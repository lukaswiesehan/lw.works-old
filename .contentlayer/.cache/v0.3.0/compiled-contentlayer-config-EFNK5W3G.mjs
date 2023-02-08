// contentlayer.config.js
import { defineDocumentType, defineNestedType, makeSource } from "contentlayer/source-files";
import { format } from "date-fns";
import { de } from "date-fns/locale/index.js";
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
      return [{ level: 1, title: post.title }, ...headings];
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
  computedFields
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "content/blog",
  documentTypes: [BlogPost]
});
export {
  BlogPost,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-EFNK5W3G.mjs.map
