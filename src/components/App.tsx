import '../main.css';
import { Header } from './layout/Header';
import { NewTask, Task } from './NewTask';
import styles from './index.module.css';
import { useState } from 'react';
import { Todo } from './Todo';

export const App = () => {
    const [tasks, setTasks] = useState<Task[]>([]);

    const handleAddNewTask = (task: Task): void => setTasks((state) => [...state, task]);

    return (
        <>
            <Header />

            <div className={styles.wrapper}>
                <NewTask onAdd={handleAddNewTask} />

                <Todo tasks={tasks} />
            </div>
        </>
    );
};
