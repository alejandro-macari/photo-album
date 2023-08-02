import styles from './Search.module.css';

interface SearchInputProps {
  query: string;
  setQuery: (query: string) => void;
  results: number;
}

const Search = ({ query, setQuery, results }: SearchInputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.counter}>{results}</div>
      <input
        type="text"
        className={styles.search}
        placeholder="Filter albums..."
        value={query}
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
