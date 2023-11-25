import {createSlice, nanoid} from "@reduxjs/toolkit"

const initialState = {
    user:"",
}
export const userSlice = createSlice({
    name: 'User',
    initialState,
    reducers :{
        setUser:(state,action)=>{
            state = action;
        }
    }
})

export const {setUser} = userSlice.actions;