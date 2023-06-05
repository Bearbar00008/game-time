export const mockTestData = {
  searchResult: {
    data: {
      events: [],
      performers: [],
      venues: [],
    },
    status: {
      status: "fulfilled",
      error: null,
    },
  },
}

export const mockTestDataWithEvents = {
  searchResult: {
    data: {
      events: [
        {
          id: "123",
          image: "image_url",
          title: "title_test",
          subtitle: "place",
        },
      ],
      performers: [],
      venues: [],
    },
    status: {
      status: "fulfilled",
      error: null,
    },
  },
}
