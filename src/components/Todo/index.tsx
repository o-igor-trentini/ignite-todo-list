import { FC } from 'react';
import { Task } from '../NewTask';
import { Empty } from './components/Empty';
import { Info } from './components/Info';
import { List } from './components/List';
import styles from './index.module.css';

interface TodoProps {
    tasks: Task[];
    changeTaskStatus: (taskId: string) => void;
}

export const Todo: FC<TodoProps> = ({ tasks, changeTaskStatus }) => {
    return (
        <div className={styles.todo}>
            <Info tasks={tasks} />

            {tasks.length ? <List tasks={tasks} changeTaskStatus={changeTaskStatus} /> : <Empty />}
        </div>
    );
};
