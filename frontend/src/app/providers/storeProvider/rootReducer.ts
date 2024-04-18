import { baseApi } from "@/shared/api";
import { userReducer } from "@/entities/user";
import { ReducersMapObject, combineReducers } from "@reduxjs/toolkit";
import { UserSchema } from "@/entities/user/model/types/types";


export interface StateSchema {
  [baseApi.reducerPath]: ReturnType<typeof baseApi.reducer>,
  user: UserSchema
}

export const rootReducer = combineReducers<ReducersMapObject<StateSchema>>({
  [baseApi.reducerPath]: baseApi.reducer,
  user: userReducer
});
