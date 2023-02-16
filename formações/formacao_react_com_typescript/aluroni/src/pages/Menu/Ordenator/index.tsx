import styles from './Ordenator.module.scss';
import options from './options.json';

import classNames from 'classnames';

import { useState } from 'react';
import {
    MdKeyboardArrowUp,
    MdKeyboardArrowDown
} from 'react-icons/md';

export type OrdenatorOptions = '' | 'porcao' | 'qtd_pessoas' | 'preco';


interface OrdenatorProps {
    ordenator: OrdenatorOptions,
    setOrdenator: React.Dispatch<React.SetStateAction<OrdenatorOptions>>
}

const Ordenator = ({
    ordenator,
    setOrdenator
}: OrdenatorProps) => {
    const [open, setOpen] = useState(false);
    const ordenatorName = ordenator && options.find(option => ordenator === option.value)?.name;

    return (
        <button
            className={classNames({
                [styles.ordenator]: true,
                [styles['ordenator--active']]: ordenator !== ''
            })}
            onClick={() => setOpen(!open)}
            onBlur={() => setOpen(false)}
        >
            <span>{ordenatorName || 'Ordenar por:'}</span>
            {
                open ?
                    <MdKeyboardArrowUp size={20} />
                    :
                    <MdKeyboardArrowDown size={20} />
            }
            <div className={classNames({
                [styles.ordenator__options]: true,
                [styles['ordenator__options--active']]: open
            })}>
                {
                    options.map(option => (
                        <div
                            className={styles.ordenator__option}
                            key={option.value}
                            onClick={() => setOrdenator(option.value as OrdenatorOptions)}
                        >
                            {option.name}
                        </div>
                    ))
                }
            </div>
        </button>
    );
};

export default Ordenator;