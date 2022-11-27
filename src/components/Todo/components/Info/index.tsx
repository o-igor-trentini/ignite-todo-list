import { FC } from 'react';
import { Badge } from '../../../ui/Badge';
import styles from './index.module.css';

export const Info: FC = () => {
    return (
        <div className={styles.info}>
            <div className={styles.createdTasks}>
                Tarefas criadas
                <Badge counter={10} />
            </div>

            <div className={styles.finishedTasks}>
                Concluídas
                <Badge counter={0} />
            </div>
        </div>
    );
};
