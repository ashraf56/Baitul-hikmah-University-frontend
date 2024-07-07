import { createSlice } from "@reduxjs/toolkit";


type  InitialState = {
    user:null|object
    token:null|string
}

const initialState:InitialState = {
    user: null,
    token: null
}

const authslice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            const { user, token } = action.payload;
            state.user = user,
            state.token = token
        },
        logout:(state)=>{
            state.user=null,
            state.token=null
        }
    }
})