import { ChangeEvent, FC, useState } from 'react';
import styles from './index.module.css';
import { v4 as uuidV4 } from 'uuid';
import { Check } from 'phosphor-react';

interface CheckboxProps {
    id?: string;
    name?: string;
    disabled?: boolean;
    checked?: boolean;
    onChange?: (checked: boolean) => void;
}

export const Checkbox: FC<CheckboxProps> = ({ id, name, disabled = false, checked, onChange }) => {
    const [isChecked, setIsChecked] = useState<boolean>(checked ?? false);
    const checkboxId = id ?? uuidV4();

    const checkboxClassName = isChecked ? styles.checkboxChecked : styles.checkbox;

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const { checked } = event.currentTarget;

        setIsChecked(checked);
        if (onChange) onChange(checked);
    };

    return (
        <div className={styles.checkboxContainer}>
            <input
                type="checkbox"
                name={name}
                id={checkboxId}
                disabled={disabled}
                checked={checked}
                onChange={handleChange}
            />

            <label className={checkboxClassName} htmlFor={checkboxId}>
                <Check />
            </label>
        </div>
    );
};
