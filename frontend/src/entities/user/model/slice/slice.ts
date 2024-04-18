import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ACCESS_TOKEN_KEY } from '@/shared/consts' 
import { type User, type UserSchema } from '../types/types'

const initialState: UserSchema = {
    authData: undefined,
    initialized: false
}

export const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User | undefined>) => {
            state.initialized = true
            if (!action.payload) return
            state.authData = {
                firstName: action.payload.firstName ?? 'Error',
                lastName: action.payload.lastName ?? 'Error',
                id: action.payload.id,
            }
        },
        logout: (state) => {
            state.authData = undefined
            localStorage.removeItem(ACCESS_TOKEN_KEY)
        }
    }
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
