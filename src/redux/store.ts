import { configureStore } from "@reduxjs/toolkit";
import authslice from "./features/auth/authslice";
import { baseapi } from "./api/baseApi";



export const store = configureStore({
    reducer: {
        [baseapi.reducerPath]: baseapi.reducer,
        auth: authslice
    },
    middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(baseapi.middleware)
})



// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch