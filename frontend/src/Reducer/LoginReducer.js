import {createSlice, nanoid} from "@reduxjs/toolkit"

const initialState = {
    isLoggedin:false,
}

export const userSlice = createSlice({
    name: 'Login',
    initialState,
    reducers :{
        toggleLogin:(state,action)=>{
            return !state.isLoggedin
        }
    }
})

export const {setUser} = userSlice.actions;