import { createSchema } from '@keystone-next/keystone/schema';
import User from './schemas/user'
import Author from './schemas/author'
import Notification from './schemas/notification'

export const lists = createSchema({
  User: User,
  Author: Author,
  Notification: Notification,
});
