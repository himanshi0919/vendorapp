import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    client : { toggleForm : false, formId: undefined, deleteBankAccountNo : null}
}

export const ReducerSlice = createSlice({
    name: 'VCONNECT',
    initialState,
    reducers : {
        toggleChangeAction : (state) => {
            state.client.toggleForm = !state.client.toggleForm
        },
        updateAction : (state, action) => {
            state.client.formId = action.payload
        },
        deleteAction : (state, action) => {
            state.client.deleteBankAccountNo = action.payload
        }
    }
})

export const { toggleChangeAction, updateAction, deleteAction } = ReducerSlice.actions

export default ReducerSlice.reducer;