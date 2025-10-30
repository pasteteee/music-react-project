export interface TSong {
  title: string;
  url: string;
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
    const res = await fetch(
      `/api/search?q=${encodeURIComponent(query)}&limit=${count}&source=${"spotify"}`
    );

    if (!res.ok)
      return undefined
    
    const data = await res.json();

    console.log(data)
    return this.getTypedArray(data?.results ?? []);
  }

  getTypedArray(data: Object[]): TSong[] {
    let result: TSong[] = [];
    
    for (let item of data) {
      result.push({
        title: String(item.title),
        url: String(item.previewURL),
      });
    }

    return result;
  }
}
