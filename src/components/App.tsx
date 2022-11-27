import '../main.css';
import { Header } from './layout/Header';
import { NewTask } from './NewTask';
import styles from './index.module.css';

export const App = () => {
    const handleAddNewTask = (task: string): void => console.log('### task', task);

    return (
        <>
            <Header />

            <div className={styles.wrapper}>
                <NewTask onAdd={handleAddNewTask} />
            </div>
        </>
    );
};
