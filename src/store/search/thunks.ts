import { appReducerThunk } from "../store"
import { axiosCustomInstance } from "../../utils/axios"
import { setResultQuery } from'./slicer'
import { createSliceStatus, actionsGenerator } from "../fetchStatus"


export const getQuery = (query: string): appReducerThunk => async (dispatch) => {
    const params = {
      q: query,
    }
    dispatch(setGetQueryStatusPending())
    try {
      const response = await axiosCustomInstance.get('v1/search', {params})
      dispatch(setResultQuery(response.data))
      dispatch(setGetQueryStatusFulfilled())

    } catch (error) {
      dispatch(setGetQueryStatusErrors())
    }
}

export const  getQueryStatus  = createSliceStatus("getQueryUser")
export const [ setGetQueryStatusStatusIdle, setGetQueryStatusPending, setGetQueryStatusFulfilled, setGetQueryStatusErrors ] = actionsGenerator(getQueryStatus.actions)
