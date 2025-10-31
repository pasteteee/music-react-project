export interface TSong {
  title: string;
  url: string;
  artistName: string,
}

interface ResultItem {
  title: string;
  previewURL: string;
  artist: {
    name: string;
  }
}

export default class Player {
  queue: null | TSong;
  _source: string | null;

  constructor() {
    this.queue = null;
    this._source = localStorage.getItem("source");
  }

  set source(value: string | null) {
    this._source = value;

    // Переписать, когда будет класс для взаимодействия с localStorage
    if (value != null) localStorage.setItem("source", value);
    else localStorage.removeItem("source");
  }

  async findTrack(query: string, count: number) {
    console.log(`/api/search?q=${encodeURIComponent(query)}&limit=${count}&source=${"spotify"}`)
    const res = await fetch(
      `/api/search?q=${encodeURIComponent(query)}&limit=${count}&source=${"spotify"}`
    );

    if (!res.ok)
      return undefined
    
    const data = await res.json();

    console.log(data)
    return this.getTypedArray(data?.results ?? []);
  }

  getTypedArray(data: ResultItem[]): TSong[] {
    let result: TSong[] = [];
    
    for (let item of data) {
      console.log(item)
      result.push({
        title: String(item.title),
        url: String(item.previewURL),
        artistName: String(item.artist.name),
      });
    }

    return result;
  }
}
