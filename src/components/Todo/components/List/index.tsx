import { Trash } from 'phosphor-react';
import { FC } from 'react';
import { Task } from '../../../NewTask';
import { Checkbox } from '../../../ui/Checkbox';
import styles from './index.module.css';

interface ListProps {
    tasks: Task[];
}

export const List: FC<ListProps> = ({ tasks }) => {
    const card = (task: Task): JSX.Element => (
        <div key={task.id} className={styles.card}>
            <div className={styles.cardDescription}>
                <Checkbox />
                <span>{task.name}</span>
            </div>

            <Trash onClick={() => alert(`tarefa deletada: ${task.name}`)} className={styles.deleteTask} />
        </div>
    );

    return <div className={styles.list}>{tasks.map((item) => card(item))}</div>;
};
