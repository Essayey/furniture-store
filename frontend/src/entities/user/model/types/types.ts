export interface User {
  id: number;
  firstName: string;
  lastName: string;
}

export interface UserSchema {
  authData?: User | undefined;
  initialized: boolean;
}
