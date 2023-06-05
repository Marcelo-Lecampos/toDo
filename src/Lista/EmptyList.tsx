import { ClipboardText } from "phosphor-react";
import styles from "./List.module.css";

export const EmptyList = () => {
    return (
        <>
            <hr />
            <ClipboardText
                size={86}
                color="var(--gray-300)"
                className={styles.ClipboardText}
            />
            <div className={styles.EmptyList}>
                <h2>Você ainda não tem tarefas cadastradas.</h2>
                <h2>Crie tarefas e organize seus itens a fazer.</h2>
            </div>
        </>
    );
};
