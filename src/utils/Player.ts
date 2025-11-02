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

interface TQueueEl {
  current: TSong,
  next: TQueueEl | null;
}

export default class Player {
  queue: TQueueEl | null;
  _source: string | null;
  #setState: React.SetStateAction<Player> | undefined;

  constructor() {
    this.queue = null;
    this.#setState = undefined;
    this._source = localStorage.getItem("source");
  }

  set setStateFunction(fn: React.Dispatch<React.SetStateAction<Player>>) {
    this.#setState = fn;
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
      return undefined;
    
    const data = await res.json();
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

  addTrackToQueue(songData: TSong) {
    if (this.#setState === undefined)
      return;

    if (this.queue == null) {
    this.#setState((prevState) => ({
      ...prevState,
      queue: [songData] // Создаем новую очередь с текущим треком
    }));
  } else {
    this.#setState((prevState) => ({
      ...prevState,
      queue: [...prevState.queue, songData] // Добавляем трек в существующую очередь
    }));
  }
  }
}
