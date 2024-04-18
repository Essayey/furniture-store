import { StateSchema } from "@/app/providers";

export const selectUserAuthData = (state: StateSchema) => state.user.authData
