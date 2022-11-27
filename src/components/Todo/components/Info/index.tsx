import { FC } from 'react';
import { Task } from '../../../NewTask';
import { Badge } from '../../../ui/Badge';
import styles from './index.module.css';

interface InfoProps {
    tasks: Task[];
}

export const Info: FC<InfoProps> = ({ tasks }) => {
    const createdTasksCounter = tasks.length;
    const finishedTasksCounter = [...tasks].filter((item) => !item.isActive).length;

    return (
        <div className={styles.info}>
            <div className={styles.createdTasks}>
                Tarefas criadas
                <Badge counter={createdTasksCounter} />
            </div>

            <div className={styles.finishedTasks}>
                Concluídas
                <Badge
                    counter={
                        finishedTasksCounter > 0
                            ? `${finishedTasksCounter} de ${createdTasksCounter}`
                            : finishedTasksCounter
                    }
                />
            </div>
        </div>
    );
};
