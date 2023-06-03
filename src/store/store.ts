import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import { combineReducers } from "redux";

import { searchSlice } from './search/slicer'
import { getQueryStatus } from "./search/thunks";

export const appReducer = combineReducers({
    searchResult: combineReducers({
      data: searchSlice.reducer,
      status: getQueryStatus.reducer
    })
})

export const appStore = configureStore({
    reducer: appReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware( {serializableCheck: false}),
})

export type appReducerRootState = ReturnType<typeof appStore.getState>

export type appReducerDispatch = typeof appStore.dispatch

export type appReducerThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  appReducerRootState,
  unknown,
  Action<string>
>

export const selectAppReducer = (state: appReducerRootState) => state