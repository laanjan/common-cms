import { list } from "@keystone-next/keystone/schema";
import { text, checkbox, integer, image } from "@keystone-next/fields";
import { document } from "@keystone-next/fields-document";

const Product = list({
  fields: {
    isVisible: checkbox({ isRequired: true, defaultValue: true }),
    order: integer({ isRequired: true, defaultValue: 0 }),
    title: text({ isRequired: true }),
    image: image(),
    price: integer({ isRequired: true }),
    inventory: integer({ isRequired: true }),
  },
});

export default Product;
