import { FC } from 'react';
import { Task } from '../../../NewTask';
import styles from './index.module.css';

interface ListProps {
    tasks: Task[];
}

export const List: FC<ListProps> = ({ tasks }) => {
    const card = (task: Task): JSX.Element => (
        <div key={task.id} className={styles.card}>
            <span>{task.name}</span>
        </div>
    );

    return <div className={styles.list}>{tasks.map((item) => card(item))}</div>;
};
