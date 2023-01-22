import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        q1: "",
        q2: "",
        q3: "",
        q4: "",
        q5: "oslo",
        q6: "japan",
        q7: "",
        q8: ""
    },
    reducers: {
        chooseQ1: (state, action) => { state.q1 = action.payload },
        chooseQ2: (state, action) => { state.q2 = action.payload },
        chooseQ3: (state, action) => { state.q3 = action.payload },
        chooseQ4: (state, action) => { state.q4 = action.payload },
        chooseQ5: (state, action) => { state.q5 = action.payload },
        chooseQ6: (state, action) => { state.q6 = action.payload },
        chooseQ7: (state, action) => { state.q7 = action.payload },
        chooseQ8: (state, action) => { state.q8 = action.payload },
    }

})

export default rootSlice.reducer;
export const { chooseQ1, chooseQ2, chooseQ3, chooseQ4, chooseQ5, chooseQ6, chooseQ7, chooseQ8 } = rootSlice.actions