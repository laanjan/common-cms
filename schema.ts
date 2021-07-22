import { createSchema } from '@keystone-next/keystone/schema';

import User from './schemas/user'
// import Post from './schemas/post'
// import Tag from './schemas/tag'
import Notification from './schemas/notification'


export const lists = createSchema({
  User: User,
 // Post: Post,
 //  Tag: Tag,
  Notification: Notification,
});
