export interface Track {
  id: string;
  title: string;
  artist: string;
  imageUrl: string;
  album?: string;
  auditions: number;
  link: string;
}

export interface ListeningHistoryProps {
  tracks: Track[];
  maxItems: number;
}

export const listeningHistory: Track[] = [
  {
    id: '1',
    title: 'She Will Be Love',
    artist: 'Maroon 5',
    imageUrl: "../../public/img-plashker/Property 1=default, Property 2=cover, Property 3=album7.svg",
    auditions: 120000,
    link: '/'
  },
  {
    id: '2',
    title: 'Dumb Little Bug',
    artist: 'Em Beihold',
    imageUrl: "../../public/img-plashker/Property 1=default, Property 2=cover, Property 3=album8.svg",
    auditions: 120000,
    link: '/'
  },
  {
    id: '1',
    title: 'She Will Be Love',
    artist: 'Maroon 5',
    imageUrl: "../../public/img-plashker/Property 1=default, Property 2=cover, Property 3=album7.svg",
    auditions: 1,
    link: '/'
  },
  {
    id: '2',
    title: 'Dumb Little Bug',
    artist: 'Em Beihold',
    imageUrl: "../../public/img-plashker/Property 1=default, Property 2=cover, Property 3=album8.svg",
    auditions: 120,
    link: '/'
  },
]