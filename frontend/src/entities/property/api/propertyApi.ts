import { baseApi } from "@/shared/api";
import {
  AllPropertiesDtoRequest,
  AllPropertiesDtoResponse,
  CreatePropertyDtoRequest,
  CreatePropertyDtoResponse,
  DeletePropertyByIdDtoRequest,
  DeletePropertyByIdDtoResponse,
  FindAllPropertiesByCategoryIdDtoResponse,
  FindAllPropertiesByCategoryIdRequest,
  PathPropertyByIdDtoRequest,
  PathPropertyByIdDtoResponse,
  PropertyByIdDtoRequest,
  PropertyByIdDtoResponse,
} from "./propertyDto";

export const propertyApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    allProperties: build.query<AllPropertiesDtoResponse, AllPropertiesDtoRequest>({
      query: () => ({
        url: `/properties`,
        method: "GET",
      }),
      providesTags: ["PROPERTY_TAG"],
    }),

    propertyById: build.query<PropertyByIdDtoResponse, PropertyByIdDtoRequest>({
      query: ({ id }) => ({
        url: `/properties/${id}`,
        method: "GET",
      }),
    }),
    findAllPropertiesByCategoryId: build.query<
      FindAllPropertiesByCategoryIdDtoResponse,
      FindAllPropertiesByCategoryIdRequest
    >({
      query: ({ id }) => ({
        url: `/properties/findAllByCategoryId/${id}`,
        method: "GET",
      }),
    }),
    createProperty: build.mutation<CreatePropertyDtoResponse, CreatePropertyDtoRequest>({
      query: ({ name, options, description, optional }) => ({
        url: "/properties",
        method: "POST",
        body: { name, options, description, optional },
      }),
      invalidatesTags: ["PROPERTY_TAG"],
    }),
    pathPropertyById: build.mutation<PathPropertyByIdDtoResponse, PathPropertyByIdDtoRequest>({
      query: ({ createdAt, description, id, name, optional, options, updatedAt }) => ({
        url: `/properties/${id}`,
        method: "PATCH",
        body: { createdAt, description, id, name, optional, options, updatedAt },
      }),
      invalidatesTags: ["PROPERTY_TAG"],
    }),
    deletePropertyById: build.mutation<DeletePropertyByIdDtoResponse, DeletePropertyByIdDtoRequest>(
      {
        query: ({ id }) => ({
          url: `/properties/${id}`,
          method: "DELETE",
        }),
        invalidatesTags: ["PROPERTY_TAG"],
      },
    ),
  }),
});

export const {
  useAllPropertiesQuery,
  useCreatePropertyMutation,
  useDeletePropertyByIdMutation,
  useFindAllPropertiesByCategoryIdQuery,
  usePathPropertyByIdMutation,
  usePropertyByIdQuery,
} = propertyApi;
