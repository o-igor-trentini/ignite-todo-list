import { FC } from 'react';
import { Task } from '../NewTask';
import { Empty } from './components/Empty';
import { Info } from './components/Info';
import { List } from './components/List';
import styles from './index.module.css';

interface TodoProps {
    tasks: Task[];
}

export const Todo: FC<TodoProps> = ({ tasks }) => {
    return (
        <div className={styles.todo}>
            <Info tasks={tasks} />

            {tasks.length ? <List tasks={tasks} /> : <Empty />}
        </div>
    );
};
