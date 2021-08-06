import { list } from '@keystone-next/keystone/schema';
import { text, relationship, password } from '@keystone-next/fields';

const User = list({
  ui: {
    listView: {
      initialColumns: ['name'],
    },
  },
  fields: {
    name: text({ isRequired: true }),
    email: text({ isRequired: true, isUnique: true }),
    password: password({ isRequired: true }),
  },
});

export default User;
