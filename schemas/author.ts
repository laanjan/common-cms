import { list } from '@keystone-next/keystone/schema';
import { text, image } from '@keystone-next/fields';
import { document } from '@keystone-next/fields-document';

const Author = list({
  fields: {
    name: text({ isRequired: true, isUnique: true }),

    avatar: image(),
    email: text(),
    stackOverflow: text(),
  },
});

export default Author;
