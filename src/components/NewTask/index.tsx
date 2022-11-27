import { PlusCircle } from 'phosphor-react';
import { FC, FormEvent, useState } from 'react';
import styles from './index.module.css';

interface NewTaskProps {
    onAdd: (task: string) => void;
}

export const NewTask: FC<NewTaskProps> = ({ onAdd }) => {
    const [buttonIsDisabled, setButtonIsDisabled] = useState<boolean>(true);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const task: string = event.currentTarget?.task?.value ?? '';

        if (!task) return;

        onAdd(task);
        event.currentTarget.reset();
    };

    const handleChange = (event: FormEvent<HTMLInputElement>) => {
        event.currentTarget.setCustomValidity('');

        event.currentTarget.value ? setButtonIsDisabled(true) : setButtonIsDisabled(false);
    };

    return (
        <div className={styles.newTask}>
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
