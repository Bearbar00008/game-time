import { render, screen } from "@testing-library/react"
import NoResultCard from "./index"

describe("NoResultCard", () => {
  test("should display the message 'No results found'", () => {
    render(<NoResultCard />)
    const messageElement = screen.getByText("No results found")
    expect(messageElement).toBeInTheDocument()
  })
})
