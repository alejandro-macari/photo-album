import styles from './Grid.module.css';
import { ReactNode } from 'react';

const Grid = ({ children }: { children?: Array<ReactNode> }) => {
  return <div className={styles.gridContainer}>{children}</div>;
};

export default Grid;
