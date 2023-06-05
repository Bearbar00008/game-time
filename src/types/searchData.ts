export interface TSearchSData {
  events: TGeneralEntity[]
  performers: TGeneralEntity[]
  venues: TGeneralEntity[]
}

interface TGeneralEntity {
  id: string
  image: string
  title: string
  subtitle: string
}
