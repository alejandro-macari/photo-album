'use client';
import { useEffect, useState, useMemo } from 'react';

import Grid from '@/infrastructure/components/Grid/Grid';
import Card from '@/infrastructure/components/Card/Card';
import { albumService } from '@/infrastructure/services/album.service';
import Search from '@/infrastructure/components/Search/Search';
import { Album } from '@/domain/models/album.model';

export default function Home() {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    albumService.get().then((data) => setAlbums(data));
  }, []);

  const results = useMemo(() => {
    return albums.filter((album) =>
      album.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()),
    );
  }, [albums, query]);

  return (
    <main>
      <Search query={query} setQuery={setQuery} results={results.length} />
      <Grid>
        {results.map((album) => (
          <Card key={album.id} album={album} />
        ))}
      </Grid>
    </main>
  );
}
