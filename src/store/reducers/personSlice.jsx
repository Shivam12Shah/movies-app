import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  info: null,
}

export const personSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    loadMovies :(state, action)=>{
        state.info = action.payload
    },
    removeMovie:(state, action)=>{
        state.info = null
    }
  },
})

// Action creators are generated for each case reducer function
export const {loadMovies , removeMovie } = personSlice.actions

export default personSlice.reducer