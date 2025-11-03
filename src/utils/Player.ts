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
  #setState: React.Dispatch<React.SetStateAction<Player>> | undefined;
  #audio: HTMLAudioElement | null;

  constructor() {
    this.queue = null;
    this.#setState = undefined;
    this.#audio = null;
  }

  set setStateFunction(fn: React.Dispatch<React.SetStateAction<Player>>) {
    this.#setState = fn;
  }

  async findTrack(query: string, count: number) {
    const res = await fetch(
      `/api/search?q=${encodeURIComponent(query)}&limit=${count}`
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
      this.queue = { current: songData, next: null };
      this.#initAudioAndPlay(songData.url);
    } else {
      let tail: TQueueEl = this.queue;
      while (tail.next !== null) tail = tail.next;
      tail.next = { current: songData, next: null };
    }

    const stateFn = this.#setState;
    const currentQueue = this.queue;

    stateFn((prev) => {
      const nextPlayer = Object.assign(new Player(), prev);
      nextPlayer.queue = currentQueue;
      nextPlayer.setStateFunction = stateFn;
      return nextPlayer;
    });
  }

  play() {
    const url = this.queue?.current?.url;
    if (!url) return;
    this.#initAudioIfNeeded(url);
    this.#audio!.play().catch(() => {});
  }

  pause() {
    console.log("stop")
    if (this.#audio) this.#audio.pause();
  }

  next() {
    if (!this.queue || !this.queue.next) return;
    this.queue = this.queue.next;

    if (this.#setState) {
      const stateFn = this.#setState;
      const currentQueue = this.queue;

      stateFn((prev) => {
        const nextPlayer = Object.assign(new Player(), prev);
        nextPlayer.queue = currentQueue;
        nextPlayer.setStateFunction = stateFn;
        return nextPlayer;
      });
    }

    const url = this.queue.current.url;
    this.#initAudioAndPlay(url);
  }

  #initAudioIfNeeded(url: string) {
    if (this.#audio == null) {
      this.#audio = new Audio(url);
      return;
    }
    if (this.#audio.src !== url) {
      this.#audio.src = url;
    }
  }

  #initAudioAndPlay(url: string) {
    this.#initAudioIfNeeded(url);
    this.#audio!.currentTime = 0;
    this.#audio!.play().catch(() => {});
  }
}
