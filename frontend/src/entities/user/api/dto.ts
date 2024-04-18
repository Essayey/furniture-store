export type AuthDtoResponse = {
    token: string
}

export type AuthDtoRequest = {
    email: string
    password: string
}

export type CheckDtoResponse = void
export type CheckDtoRequest = void

export type RegisterDtoResponse = {
    token: string
}

export type RegisterDtoRequest = {
    login: string
    password: string
}