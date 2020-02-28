export interface ITrack {
  id: string
  title: string
  artist: string
  coverUrl: string
  trackUrl: string
}

export interface IPlaylist {
  year: string
  title: string
  tracks: ITrack[]
  coverUrl: string
  description: string
}
