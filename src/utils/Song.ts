export interface TSong { }

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

  async findTrack(query: string) {
    const res = await fetch(
      `/api/search?q=${encodeURIComponent(query)}&limit=5&source=${"spotify"}`
    );

    if (!res.ok)
      return { error: "Not found" }

    const data = await res.json();
    console.log(data);
    return data?.results ?? [];
  }
}

