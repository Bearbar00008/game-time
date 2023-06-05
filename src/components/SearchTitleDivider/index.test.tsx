import { render, screen } from "@testing-library/react"
import { ThemeProvider } from "styled-components"
import SearchTitleDivider from "./index"


describe("SearchTitleDivider", () => {
  test("should render the title correctly", () => {
    const title = "Sample Title"
    render(
        <SearchTitleDivider title={title} />
    )
    const titleElement = screen.getByText(title)
    expect(titleElement).toBeInTheDocument()
  })
})
