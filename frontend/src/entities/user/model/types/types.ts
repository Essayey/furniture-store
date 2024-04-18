export interface User {
    id: string
    firstName: string
    lastName: string
}

export interface UserSchema {
    authData?: User | undefined
    initialized: boolean
}