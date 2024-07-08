/* eslint-disable @typescript-eslint/no-explicit-any */
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authslice";
import { baseapi } from "./api/baseApi";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";


const configPersistor = {
    key: 'auth',
    storage
}

const persistedAuth = persistReducer(configPersistor, authReducer)

export const store = configureStore({
    reducer: {
        [baseapi.reducerPath]: baseapi.reducer,
        auth: persistedAuth
    },
    middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(baseapi.middleware)
})



// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const persistor = persistStore(store)