export interface ITrack {
  name: string;
  rank: string;
  popularity: number;
}

export interface IArtist {
  mbid: string;
  image: string;
  name: string;
}

export interface IRSAA {
  [x: string]: {
    types: string[];
    endpoint: string;
    method: string;
  };
}

export interface IClickable {
  onClick: any;
}

export interface IArtistInfo {
  name: string;
  bio: string;
}

export interface IArtistDetails extends IArtistInfo {
  tracks: ITrack[];
}

export interface IResource {
  isFetching: boolean;
  error: string;
}

export interface IArtistInfoResource extends IResource {
  artistInfo: IArtistInfo;
}
export interface ITopTracksResource extends IResource {
  topTracks: ITrack[];
}
export interface ITopArtistsResource extends IResource {
  topArtists: ITrack[];
}

export interface IConstant {
  [x: string]: string;
}
