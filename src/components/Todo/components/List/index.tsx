import { Trash } from 'phosphor-react';
import { FC } from 'react';
import { Task } from '../../../NewTask';
import { Checkbox } from '../../../ui/Checkbox';
import styles from './index.module.css';
import { v4 as uuidV4 } from 'uuid';

interface ListProps {
    tasks: Task[];
    onChangeTaskStatus: (taskId: string) => void;
    onRemoveTask: (taskId: string) => void;
}

export const List: FC<ListProps> = ({ tasks, onChangeTaskStatus, onRemoveTask }) => {
    const card = (task: Task): JSX.Element => {
        const checkboxId = uuidV4();
        const taskNameClassName: string | undefined = task.done ? styles.taskDone : undefined;

        const handleChangeTaskStatus = (): void => onChangeTaskStatus(task.id);

        const handleRemoveTask = (): void => onRemoveTask(task.id);

        return (
            <div key={task.id} className={styles.card}>
                <div className={styles.cardDescription}>
                    <Checkbox id={checkboxId} checked={task.done} onChange={handleChangeTaskStatus} />
                    <label htmlFor={checkboxId} className={taskNameClassName}>
                        {task.name}
                    </label>
                </div>

                <Trash onClick={handleRemoveTask} className={styles.deleteTask} />
            </div>
        );
    };

    return <div className={styles.list}>{tasks.map((item) => card(item))}</div>;
};
