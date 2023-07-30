import styles from './Grid.module.css';

const Grid = ({ children }: React.PropsWithChildren) => {
  return <div className={styles.gridContainer}>{children}</div>;
};

export default Grid;
