
import {
  type BaseQueryFn, createApi, fetchBaseQuery, type FetchArgs, type FetchBaseQueryError
} from '@reduxjs/toolkit/query/react'
import { CATEGORIES_TAG, PRODUCTS_TAG, PROPERTY_CATEGORY_TAG, PROPERTY_TAG, CARTS_TAG } from "./tags";
import { User } from "@/entities/user/model/types/types";
import { ACCESS_TOKEN_KEY } from "../consts";
import {jwtDecode} from 'jwt-decode'
import { userSlice } from '@/entities/user/model/slice/slice';


const baseQuery = fetchBaseQuery({
  baseUrl: __API__,
  prepareHeaders: (headers) => {
    const token = localStorage.getItem(ACCESS_TOKEN_KEY)
    if (token) {
      headers.set('authorization', `Bearer ${token}`)
    }
    return headers
  }
})

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions)

  if (api.endpoint === 'check') {
    if (result?.meta?.response?.status === 200) {
      const token = localStorage.getItem(ACCESS_TOKEN_KEY)
      const authData: User = jwtDecode(token as string)
      console.log('Авторизован')
      api.dispatch(userSlice.actions.setAuthData(authData))
    } else {
      console.log('Не авторизован')
      api.dispatch(userSlice.actions.setAuthData(undefined))
    }
  }

  return result
}

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReauth,
  tagTypes: [CATEGORIES_TAG, PROPERTY_TAG, PRODUCTS_TAG, PROPERTY_CATEGORY_TAG, CARTS_TAG],
  endpoints: () => ({}),
});
