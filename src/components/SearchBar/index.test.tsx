import { render, screen, fireEvent } from "@testing-library/react"
import { Provider } from "react-redux"
import configureStore from "redux-mock-store"
import SearchBar from "."
import { mockTestData, mockTestDataWithEvents } from "./mockTestData"

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
        <SearchBar />
      </Provider>
    )

    expect(screen.getByPlaceholderText("Search")).toBeInTheDocument()
  })

  test("updates the query value when the input changes", () => {
    const store = mockStore(mockTestData)

    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    )

    const input = screen.getByPlaceholderText("Search") as HTMLInputElement

    fireEvent.change(input, { target: { value: "test query" } })

    expect(input.value).toBe("test query")
  })

  test("clears the query field and dispatches clear actions when clear icon is clicked", () => {
    const store = mockStore(mockTestData)

    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    )

    const input = screen.getByPlaceholderText("Search") as HTMLInputElement

    fireEvent.change(input, { target: { value: "test query" } })

    expect(input.value).toBe("test query")

    const clearIcon = screen.getByAltText("clear icon")

    fireEvent.click(clearIcon)

    expect(input.value).toBe("")
  })

  test("show no result message", () => {
    const store = mockStore(mockTestData)

    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    )

    const input = screen.getByPlaceholderText("Search") as HTMLInputElement

    fireEvent.change(input, { target: { value: "test query" } })

    const noResultCardElement = screen.getByText("No results found")
    expect(noResultCardElement).toBeInTheDocument()
  })

  test("show query results", () => {
    const store = mockStore(mockTestDataWithEvents)

    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    )

    const input = screen.getByPlaceholderText("Search") as HTMLInputElement

    fireEvent.change(input, { target: { value: "test query" } })

    const titleResultElement = screen.getByText("title_test")
    const subtitleResultElement = screen.getByText("place")
    const ImageAlt = screen.getByAltText("title_test")

    expect(titleResultElement).toBeInTheDocument()
    expect(subtitleResultElement).toBeInTheDocument()
    expect(subtitleResultElement).toBeInTheDocument()
    expect(ImageAlt).toBeInTheDocument()
  })
})
