import '../main.css';
import { Header } from './layout/Header';
import { NewTask, Task } from './NewTask';
import styles from './index.module.css';
import { useEffect, useState } from 'react';
import { Todo } from './Todo';

export const App = () => {
    const [tasks, setTasks] = useState<Task[]>([]);

    const changeLocalStorage = (tasks: Task[]): void => {
        const tasksJson = JSON.stringify(tasks);

        localStorage.setItem('@ignite-todo-list:tasks', tasksJson);
    };

    const handleAddNewTask = (task: Task): void =>
        setTasks((state) => {
            const newState = [...state, task];

            changeLocalStorage(newState);

            return newState;
        });

    const handleRemoveTask = (taskId: string): void =>
        setTasks((state) => {
            const newState = [...state].filter((item) => item.id !== taskId);

            changeLocalStorage(newState);

            return newState;
        });

    const handleChangeTaskStatus = (taskId: string): void => {
        const taskIndex = tasks.findIndex((item) => item.id === taskId);

        if (taskIndex < 0) return;

        const newState = tasks.slice();
        newState[taskIndex].done = !newState[taskIndex].done;

        changeLocalStorage(newState);
        setTasks(newState);
    };

    useEffect(() => {
        const storedTasksAsJson = localStorage.getItem('@ignite-todo-list:tasks');
        let storedTasks: Task[] = [];

        if (storedTasksAsJson) storedTasks = JSON.parse(storedTasksAsJson);

        setTasks(storedTasks);
    }, []);

    return (
        <>
            <Header />

            <div className={styles.wrapper}>
                <NewTask onAdd={handleAddNewTask} />

                <Todo tasks={tasks} onChangeTaskStatus={handleChangeTaskStatus} onRemoveTask={handleRemoveTask} />
            </div>
        </>
    );
};
