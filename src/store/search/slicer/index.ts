import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { TSearchResponse } from "../../../types/searchResponse"
import { TSearchSData } from "../../../types/searchData"

const initialState: TSearchSData = { events: [], performers: [], venues: [] }

export const searchSlice = createSlice({
  name: "search",
  initialState: initialState,
  reducers: {
    setResultQuery: (state, action: PayloadAction<TSearchResponse>) => {
      state.events = action.payload.events.slice(0, 3).map((event) => {
        return {
          id: event.event.id,
          image: event.performers[0].hero_image_url,
          title: event.event.name,
          subtitle: event.venue.name,
        }
      })
      state.performers = action.payload.performers
        .slice(0, 3)
        .map((performer) => {
          return {
            id: performer.id,
            image: performer.hero_image_url,
            title: performer.name,
            subtitle: performer.category,
          }
        })

      state.venues = action.payload.venues.slice(0, 3).map((venue) => {
        return {
          id: venue.id,
          image: venue.image_url,
          title: venue.name,
          subtitle: venue.city,
        }
      })
    },
    setClear: (state) => {
      state.events = []
      state.performers = []
      state.venues = []
    },
  },
})

export const { setResultQuery, setClear } = searchSlice.actions
