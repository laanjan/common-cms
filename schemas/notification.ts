import { list } from "@keystone-next/keystone/schema";
import { text, checkbox, integer } from "@keystone-next/fields";
import { document } from "@keystone-next/fields-document";

const Notification = list({
  fields: {
    name: text({ isRequired: true, isUnique: true }),

    isVisible: checkbox({ isRequired: true, defaultValue: true }),
    order: integer({ isRequired: true, isUnique: true }),
    content: document({
      formatting: true,
      links: true,
    }),
  },
});

export default Notification;
