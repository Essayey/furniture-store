import { baseApi } from "@/shared/api";

export const categoryApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        register: build.query<AllCategoriesDtoResponse, AllCategoriesDtoRequset>({
            query: () => ({
                url: `/categories`,
                method: "GET",
            }),
            providesTags: ["CATEGORIES_TAG"],
        }),
        login: build.query<AllCategoriesDtoResponse, AllCategoriesDtoRequset>({
            query: () => ({
                url: `/categories`,
                method: "GET",
            }),
            providesTags: ["CATEGORIES_TAG"],
        }),
    }),
});