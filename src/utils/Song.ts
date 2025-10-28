// Client must not import Node-only libraries like `play-dl`.

export interface TSong {

}

export default class Player {
    queue:null|TSong;
    _source:string | null;

    constructor() {
        this.queue = null;
        this._source = localStorage.getItem('source');
    }

    set source(value: string | null) {
        this._source = value;

        if (value != null)
            localStorage.setItem('source', value);
        else
            localStorage.removeItem('source');
    }

    async findTracks() {
        const query = 'Kai Angel';
        const res = await fetch(`/api/search?q=${encodeURIComponent(query)}&limit=5`);
        if (!res.ok) throw new Error('Search request failed');
        const data = await res.json();
        console.log(data);
        return data?.results ?? [];
    }
}

