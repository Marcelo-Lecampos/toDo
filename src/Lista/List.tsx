import styles from "./List.module.css";
import { useState } from "react";
import { PlusCircle } from "phosphor-react";
import { Tarefas } from "./Tarefas";
import { useTodo } from "../context/useTodo";





export const List = () => {
    const [inputValue, setInputValue] = useState("");
    const { concluidos, concluidosDiminuir, tarefas, setTarefas  } = useTodo();

  

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!inputValue) return;
        setTarefas([...tarefas, inputValue]);
        setInputValue("");
    };

    

    return (
        <main>
            <div>
                <form onSubmit={onSubmit}>
                    <input
                        type="text"
                        placeholder="Adicione uma nova tarefa"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <button type="submit">
                        Criar <PlusCircle size={32} />
                    </button>
                </form>
                <div className={styles.ListHeader}>
                    <div>
                        <span className={styles.ListHeader_Tarefas}>
                            Tarefas criadas
                        </span>
                        <span className={styles.ListHeader_Contagem}>{tarefas.length}</span>
                    </div>
                    <div>
                        <span className={styles.ListHeader_Concluido}>
                            Concluídas
                        </span>
                        <span className={styles.ListHeader_Contagem}>{concluidos} de {tarefas.length}</span>
                    </div>
                </div>
            </div>
            <div className={styles.ListContainer}>
                <Tarefas tarefas={tarefas} />
            </div>
        </main>
    );
};
