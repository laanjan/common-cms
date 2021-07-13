import { list } from "@keystone-next/keystone/schema";
import { text, relationship } from "@keystone-next/fields";

const Tag = list({
  ui: {
    isHidden: true,
  },
  fields: {
    name: text(),
    posts: relationship({
      ref: "Post.tags",
      many: true,
    }),
  },
});

export default Tag;
