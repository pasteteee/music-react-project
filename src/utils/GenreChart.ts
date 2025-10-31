export interface GenreChartItem {
  id: string;
  genre: string;
  title: string;
  imgUrl: string;
  link: string;
}

export const genresStruct: GenreChartItem[] = [
  {
    id: '1',
    genre: 'AI Music Genre',
    title: 'Top 50',
    imgUrl: "../../public/img-plashker/Property 1=default, Property 2=cover, Property 3=album6.svg",
    link: '/search'
  },
  {
    id: '2',
    genre: 'Pop',
    title: 'Top 50',
    imgUrl: "../../public/img-plashker/Property 1=default, Property 2=cover, Property 3=album1.svg",
    link: '/'
  }
]