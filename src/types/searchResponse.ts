export interface TSearchResponse {
  events: Event[]
  performers: Performer3[]
  venues: Venue2[]
  display_groups: DisplayGroup[]
}

export interface Event {
  event: Event2
  performers: Performer2[]
  venue: Venue
  meta: Meta3
}

export interface Event2 {
  banner: Banner
  category: string
  center_court: CenterCourt
  datetime_local: string
  datetime_utc: string
  id: string
  map_url: string
  min_price: MinPrice
  name: string
  performers: Performer[]
  sales_cut_off: string
  section_map_id: string
  tbd: boolean
  time_tbd: boolean
  date_tbd: boolean
  venue_id: string
  venue_config: string
  related_events: RelatedEvents
}

export interface Banner {
  headline: string
  subtitle: string
  emoji: string
}

export interface CenterCourt {
  x: number
  y: number
  width: number
  height: number
}

export interface MinPrice {
  total: number
  prefee: number
}

export interface Performer {
  id: string
  primary: boolean
}

export interface RelatedEvents {}

export interface Performer2 {
  abbrev: string
  category: string
  category_group: string
  contrast_color: string
  display_type: string
  id: string
  hero_image_url: string
  medium_name: string
  name: string
  primary_color: string
  short_name: string
  slug: string
  meta: Meta
}

export interface Meta {
  score_boost: any
}

export interface Venue {
  city: string
  id: string
  location: Location
  name: string
  show_currency: boolean
  slug: string
  state: string
  timezone: string
  metro: string
  image_url: string
  meta: Meta2
}

export interface Location {
  lat: number
  lon: number
}

export interface Meta2 {
  score_boost: any
}

export interface Meta3 {
  search_score: number
  sort_order: number
  display_group: string
  popularity_score: number
  score_boost: number
}

export interface Performer3 {
  abbrev: string
  category: string
  category_group: string
  contrast_color: string
  display_type: string
  id: string
  hero_image_url: string
  medium_name: string
  name: string
  primary_color: string
  short_name: string
  slug: string
  meta: Meta4
}

export interface Meta4 {
  search_score: number
  sort_order: number
  display_group: string
  popularity_score: number
  score_boost: number
}

export interface Venue2 {
  city: string
  id: string
  location: Location2
  name: string
  show_currency: boolean
  slug: string
  state: string
  timezone: string
  metro: string
  image_url: string
  meta: Meta5
}

export interface Location2 {
  lat: number
  lon: number
}

export interface Meta5 {
  search_score: number
  sort_order: number
  display_group: string
  popularity_score: number
  score_boost: number
}

export interface DisplayGroup {
  display_name: string
  slug: string
  sort_order: number
}
