import { render, screen } from "@testing-library/react"
import SearchResultCard from "./index"

describe("SearchResultCard", () => {
  test("should render the data correctly", () => {
    const title = "Sample Title"
    const subTitle = "Sample Subtitle"
    const image = "Sample Image"

    render(<SearchResultCard title={title} subtitle={subTitle} image={image} />)
    const imageElement = screen.getByAltText(title)
    const titleElement = screen.getByText(title)
    const subTitleElement = screen.getByText(title)

    expect(titleElement).toBeInTheDocument()
    expect(subTitleElement).toBeInTheDocument()
    expect(imageElement).toBeInTheDocument()
  })
})
