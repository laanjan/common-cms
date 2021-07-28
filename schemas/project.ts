import { list } from "@keystone-next/keystone/schema";
import { text } from "@keystone-next/fields";
import { document } from "@keystone-next/fields-document";

const Project = list({
  fields: {
    name: text({ isRequired: true, isUnique: true }),

    attribution: document({ formatting: true, links: true }),
    copyright: text(),
    github: text(),
    license: text(),
  }
});

export default Project;
