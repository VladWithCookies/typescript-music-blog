export interface ITrack {
  id: string;
  title: string;
  artist: string;
  coverUrl: string;
  trackUrl: string;
}

export interface IPlaylist {
  year: number;
  title: string;
  tracks: ITrack[];
  coverUrl: string;
}

