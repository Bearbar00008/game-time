import { renderHook, act, } from "@testing-library/react"
import useDebounce from "./index"



describe("useDebounce", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });
  test("should return debounced value", () => {
    const { result } = renderHook(() => useDebounce("initial", 500))

    expect(result.current).toBe("initial")

    act(() => {
      jest.runAllTimers();
    })

    expect(result.current).toBe("initial")

    act(() => {
      result.current = "updated"
      jest.runAllTimers();
    })

    expect(result.current).toBe("updated")
  })
  test("should clear timeout on unmount", () => {
    const { result, unmount } = renderHook(() => useDebounce("value", 500))

    expect(result.current).toBe("value")

    unmount()

    act(() => {
      jest.runAllTimers();
    })

    expect(result.current).toBe("value")
  })
})
