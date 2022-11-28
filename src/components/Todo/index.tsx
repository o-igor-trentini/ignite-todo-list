import { FC } from 'react';
import { Task } from '../NewTask';
import { Empty } from './components/Empty';
import { Info } from './components/Info';
import { List } from './components/List';
import styles from './index.module.css';

interface TodoProps {
    tasks: Task[];
    onChangeTaskStatus: (taskId: string) => void;
    onRemoveTask: (taskId: string) => void;
}

export const Todo: FC<TodoProps> = ({ tasks, onChangeTaskStatus, onRemoveTask }) => {
    return (
        <div className={styles.todo}>
            <Info tasks={tasks} />

            {tasks.length ? (
                <List tasks={tasks} onChangeTaskStatus={onChangeTaskStatus} onRemoveTask={onRemoveTask} />
            ) : (
                <Empty />
            )}
        </div>
    );
};
