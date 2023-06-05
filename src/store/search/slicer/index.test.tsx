import { searchSlice, setResultQuery, setClear } from "./"
import { mockPayload } from "./mockTestData"

describe("searchSlice", () => {
  test("should set the result query", () => {
    const initialState = {
      events: [],
      performers: [],
      venues: [],
    }

    const nextState = searchSlice.reducer(
      initialState,
      setResultQuery(mockPayload)
    )

    expect(nextState.events).toHaveLength(1)
    expect(nextState.performers).toHaveLength(1)
    expect(nextState.venues).toHaveLength(1)

    expect(nextState.events[0].id).toBe("63f1223f57be6100016545a0")
    expect(nextState.events[0].image).toBe(
      "https://images.gametime.co/musicelflaco/hero@4x.jpg"
    )
    expect(nextState.events[0].title).toBe("Luis Angel")
    expect(nextState.events[0].subtitle).toBe("The Criterion")

    expect(nextState.performers[0].id).toBe("5a846b0525f2c55b441ec3c1")
    expect(nextState.performers[0].image).toBe(
      "https://images.gametime.co/musicluismiguel/hero@4x.jpg"
    )
    expect(nextState.performers[0].title).toBe("Luis Miguel")
    expect(nextState.performers[0].subtitle).toBe("music")

    expect(nextState.venues[0].id).toBe("61afde36f758120001898101")
    expect(nextState.venues[0].image).toBe(
      "https://maps.gametime.co/v2/okc_zoo_amphitheatre/music/music-8.png"
    )
    expect(nextState.venues[0].title).toBe("Oklahoma City Zoo Amphitheatre")
    expect(nextState.venues[0].subtitle).toBe("Oklahoma City")
  })

  test("should clear the search results", () => {
    const initialState = {
      events: [
        {
          id: "1",
          title: "Event 1",
          image: "image_url_1",
          subtitle: "Subtitle 1",
        },
      ],
      performers: [
        {
          id: "2",
          title: "Performer 2",
          image: "image_url_2",
          subtitle: "Subtitle 2",
        },
      ],
      venues: [
        {
          id: "3",
          title: "Venue 3",
          image: "image_url_3",
          subtitle: "Subtitle 3",
        },
      ],
    }

    const nextState = searchSlice.reducer(initialState, setClear())

    expect(nextState.events).toHaveLength(0)
    expect(nextState.performers).toHaveLength(0)
    expect(nextState.venues).toHaveLength(0)
  })
})
