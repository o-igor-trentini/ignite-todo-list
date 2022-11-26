import { FC } from 'react';
import logoImg from '../../../assets/logo.svg';
import styles from './index.module.css';

export const Header: FC = () => {
    return (
        <div className={styles.header}>
            <img
                src={logoImg}
                alt="Logo da aplicacão que contêm um foguete a esquerda e um texto como o nome da aplicação a direita"
            />
        </div>
    );
};
