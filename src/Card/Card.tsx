import { Trash } from "phosphor-react";
import styles from "./Card.module.css";
import { useState } from "react";
import { useTodo } from "../context/useTodo";

interface CardProps {
    tarefa: string;
    posicao: number;
}

export const Card = ({ tarefa, posicao }: CardProps) => {
    const [checked, setChecked] = useState(false);
    const { concluidosSoma, concluidosDiminuir, concluidos, removeTarefa } = useTodo();

    const handleCheckboxChange = () => {
        setChecked(!checked);
        if (checked) {
            concluidosDiminuir();
        } else {
            concluidosSoma();
        }
    };

    const handleTrash = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        removeTarefa(posicao)
    };

    const cardClassName = checked ? ` ${styles.checked}` : "";

    return (
        <section className={styles.container}>
            <form action="">
                <input
                    className={styles.check}
                    type="checkbox"
                    onChange={handleCheckboxChange}
                    checked={checked}
                />
                <div className={styles.tarefaContainer}>
                    <p className={cardClassName}>{tarefa}</p>
                </div>
                <button className={styles.trashButton} onClick={handleTrash}>
                    <Trash size={14} />
                </button>
            </form>
        </section>
    );
};
