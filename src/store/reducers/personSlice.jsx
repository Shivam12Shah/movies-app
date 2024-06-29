import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  info: null,
}

export const personSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    loadPersons :(state, action)=>{
        state.info = action.payload
    },
    removePersons:(state, action)=>{
        state.info = null
    }
  },
})

// Action creators are generated for each case reducer function
export const {loadPersons , removePersons } = personSlice.actions

export default personSlice.reducer