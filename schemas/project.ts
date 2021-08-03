import { list } from "@keystone-next/keystone/schema";
import { image, text } from "@keystone-next/fields";
import { document } from "@keystone-next/fields-document";

const Project = list({
  fields: {
    name: text({ isRequired: true, isUnique: true }),

    attribution: document({ formatting: true, links: true }),
    avatar: image(),
    copyright: text(),
    github: text(),
    license: text(),
    title: text(),
  }
});

export default Project;
