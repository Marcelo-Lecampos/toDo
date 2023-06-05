import { useState } from "react";
import { ToDoContext } from "./TodoContext";

interface toDOProviderProps {
    children: React.ReactNode;
}

interface toDOContextData {
    concluidos: number;
}

export const TodoProvider: React.FC<toDOProviderProps> = ({ children }) => {
    const [concluidos, setConcluidos] = useState<number>(0);
    const [tarefas, setTarefas] = useState<string[]>([]);

    const removeTarefa = (posicao: number) => {
        const filtragem = tarefas.filter((tarefa, index) => index !== posicao); 
        return setTarefas(filtragem);


    };

    const concluidosSoma = () => {
        setConcluidos(concluidos + 1);
    };

    const concluidosDiminuir = () => {
        setConcluidos(concluidos - 1);
    };

    return (
        <ToDoContext.Provider
            value={{
                concluidos,
                concluidosSoma,
                concluidosDiminuir,
                tarefas,
                setTarefas,
                removeTarefa,
            }}
        >
            {children}
        </ToDoContext.Provider>
    );
};
