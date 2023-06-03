import { createSlice, PayloadAction, Action } from '@reduxjs/toolkit'

export const createSliceStatus = (name: string) =>{

     interface TCounterState {
        status: 'idle' | 'pending' | 'fulfilled' | 'rejected'
        error: null | string | string []
      }
      
      const initialState: TCounterState = {
        status: 'idle',
        error: null
      };


    const newSliceStatus = createSlice({
        name: `${name}/status`,
        initialState,
        
        reducers: {
        
        idle: (state) => {
            state.status = "idle"
        },

        pending: (state) => {
            state.status = "pending"
        },

        fulfilled: (state) => {
            state.status = "fulfilled"
        },
        rejected: (state, action: PayloadAction<string>) => {
            state.status = "rejected"
            state.error = action.payload
        },
        },
    });


    return  newSliceStatus
}

export const actionsGenerator = (actions: any) =>  [actions.idle, actions.pending, actions.fulfilled, actions.rejected]

