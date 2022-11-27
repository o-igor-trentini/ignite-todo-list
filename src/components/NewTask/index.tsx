import { PlusCircle } from 'phosphor-react';
import { FC, FormEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './index.module.css';

export interface Task {
    id: string;
    name: string;
    isActive: boolean;
}

interface NewTaskProps {
    onAdd: (task: Task) => void;
}

export const NewTask: FC<NewTaskProps> = ({ onAdd }) => {
    const [buttonIsDisabled, setButtonIsDisabled] = useState<boolean>(true);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const taskName: string = event.currentTarget?.task?.value ?? '';

        if (!taskName) return;

        onAdd({ id: uuidv4(), name: taskName, isActive: true });
        event.currentTarget.reset();
    };

    const handleChange = (event: FormEvent<HTMLInputElement>) => {
        event.currentTarget.setCustomValidity('');

        event.currentTarget.value ? setButtonIsDisabled(false) : setButtonIsDisabled(true);
    };

    return (
        <div id="newTask" className={styles.newTask}>
            <form onSubmit={handleSubmit}>
                <input
                    name="task"
                    type="text"
                    placeholder="Adicione uma nova tarefa"
                    autoComplete="off"
                    onChange={handleChange}
                    required
                />

                <button type="submit" disabled={buttonIsDisabled}>
                    Criar <PlusCircle size={16} />
                </button>
            </form>
        </div>
    );
};
