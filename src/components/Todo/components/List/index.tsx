import { FC } from 'react';
import { Task } from '../../../NewTask';

interface ListProps {
    tasks: Task[];
}

export const List: FC<ListProps> = ({ tasks }) => {
    return (
        <div>
            {tasks.map((item) => (
                <div key={item.id}>{item.name}</div>
            ))}
        </div>
    );
};
