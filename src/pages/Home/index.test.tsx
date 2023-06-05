import { render, screen, fireEvent } from "@testing-library/react"
import { Provider } from "react-redux"
import configureStore from "redux-mock-store"

import { mockTestData } from "./mockDataTest"
import Home from "."

const mockStore = configureStore([])

jest.mock("axios", () => ({
  create: jest.fn(() => ({
    get: jest.fn(),
  })),
}))

describe("SearchBar", () => {
  test("renders the SearchBar component", () => {
    const store = mockStore(mockTestData)

    render(
      <Provider store={store}>
        <Home />
      </Provider>
    )
    const logoImage = screen.getByAltText("game time logo")
    expect(logoImage).toBeInTheDocument()
  })
})
