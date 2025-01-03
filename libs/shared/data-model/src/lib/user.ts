import type { DocumentType } from '@typegoose/typegoose';

export interface UserFields {
  name: string;
  email: string;
  password: string;
  avatar?: string;
}

export type User = Omit<DocumentType<UserFields>, 'password'>;

export type CreateUserDto = Pick<UserFields, 'name' | 'email' | 'password'>;
