import { baseApi } from "@/shared/api";
import { AuthDtoRequest, AuthDtoResponse, CheckDtoRequest, CheckDtoResponse, RegisterDtoRequest, RegisterDtoResponse } from "./dto";



export const authApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        auth: build.query<AuthDtoResponse, AuthDtoRequest>({
            query: (body) => ({
                url: `/auth/login`,
                method: "POST",
                body
            }),
        }),
        register: build.query<RegisterDtoResponse, RegisterDtoRequest>({
            query: (body) => ({
                url: `/auth/registration`,
                method: "POST",
                body
            }),
        }),
        check: build.query<CheckDtoResponse, CheckDtoRequest>({
            query: () => ({
                url: `/auth/check`,
                method: "GET",
            }),
        }),
    }),
})

export const {
    useLazyAuthQuery,
    useLazyCheckQuery,
    useLazyRegisterQuery
} = authApi