export interface ITrack {
  id: string; 
  title: string;
  artist: string;
  coverUrl: string;
}

export interface IPlaylist {
  year: number;
  title: string;
  tracks: ITrack[];
}

