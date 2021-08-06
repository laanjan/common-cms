import { createSchema } from '@keystone-next/keystone/schema';
import User from './schemas/user';
import Author from './schemas/author';
import Project from './schemas/project';
import Notification from './schemas/notification';

export const lists = createSchema({
  User: User,
  Author: Author,
  Project: Project,
  Notification: Notification,
});
