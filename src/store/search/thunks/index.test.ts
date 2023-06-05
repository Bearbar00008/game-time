import configureStore, { MockStoreEnhanced } from "redux-mock-store"
import thunk, { ThunkDispatch } from "redux-thunk"
import { axiosCustomInstance } from "../../../utils/axios"
import { AnyAction } from "redux"
import {
  getQuery,
  setGetQueryStatusFulfilled,
  setGetQueryStatusErrors,
  setGetQueryStatusPending,
} from "."
import { setResultQuery } from "../slicer"

const middlewares = [thunk]
const mockStore = configureStore<any, ThunkDispatch<any, any, AnyAction>>(
  middlewares
)

jest.mock("axios", () => ({
  create: jest.fn(() => ({
    get: jest.fn(),
  })),
}))

describe("getQuery thunk", () => {
  let store: MockStoreEnhanced<any, ThunkDispatch<any, any, AnyAction>>
  const response = {
    data: {
      events: [],
      performers: [],
      venues: [],
      display_groups: [],
    },
  }
  const query = "sample-query"
  beforeEach(() => {
    store = mockStore()
  })

  test("should dispatch setGetQueryStatusFulfilled on successful request", async () => {
    ;(axiosCustomInstance.get as jest.Mock).mockResolvedValue(response)

    await store.dispatch(getQuery(query))

    const expectedActions = [
      setGetQueryStatusPending(),
      setResultQuery(response.data),
      setGetQueryStatusFulfilled(),
    ]
    const actions = store.getActions()

    expect(actions).toEqual(expectedActions)
  })

  test("should dispatch setGetQueryStatusErrors on failed request", async () => {
    ;(axiosCustomInstance.get as jest.Mock).mockRejectedValue(
      new Error("Sample error")
    )

    await store.dispatch(getQuery(query))

    const expectedActions = [
      setGetQueryStatusPending(),
      setGetQueryStatusErrors(),
    ]
    const actions = store.getActions()

    expect(actions).toEqual(expectedActions)
  })
})
