import express from 'express';
import cors from 'cors';
import play, { spotify } from 'play-dl';

const app = express();
const PORT = Number(process.env.PORT || 5174);

app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ ok: true });
});

app.get('/api/search', async (req, res) => {
  try {
    const query = String(req.query.q || '').trim();
    const limit = Math.min(Number(req.query.limit || 5), 25);

    if (!query) {
      res.status(400).json({ error: 'Missing query parameter q' });
      return;
    }

    const results = await play.search(query, { limit, source: {
      deezer: "track"
    } });
    res.json({ query, results });
  } catch (error) {
    res.status(500).json({ error: 'Search failed' });
  }
});

app.listen(PORT, () => {
  console.log(`[server] listening on http://localhost:${PORT}`);
});


