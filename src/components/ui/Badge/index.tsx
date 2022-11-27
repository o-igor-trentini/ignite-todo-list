import { FC } from 'react';
import styles from './index.module.css';

interface BadgeProps {
    counter: number;
}

export const Badge: FC<BadgeProps> = ({ counter }) => {
    return <span className={styles.badge}>{counter}</span>;
};
