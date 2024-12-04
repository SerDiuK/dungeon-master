export interface User {
  name: string;
  email: string;
  password: string;
}

export type CreateUserDto = Pick<User, 'name' | 'email' | 'password'>;
