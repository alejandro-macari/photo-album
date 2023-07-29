import styles from './Search.module.css';

interface Props {
  query: string;
  setQuery: (query: string) => void;
  results: number;
}

const Search = ({ query, setQuery, results }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.counter}>{results}</div>
      <input
        type="text"
        className={styles.search}
        placeholder="Search your album"
        value={query}
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
