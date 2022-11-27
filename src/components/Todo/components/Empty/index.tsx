import { ClipboardText } from 'phosphor-react';
import { FC } from 'react';
import styles from './index.module.css';

export const Empty: FC = () => {
    return (
        <div className={styles.empty}>
            <ClipboardText size={56} />

            <div>
                <span>Você ainda não tem tarefas cadastradas</span>
                <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
        </div>
    );
};
