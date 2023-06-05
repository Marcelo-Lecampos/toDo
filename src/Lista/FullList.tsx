import { Card } from "../Card/Card";

interface Fulllist {
    tarefas: string[];
}

export const FullList = ({ tarefas }: Fulllist) => {
    return (
        <div>
            {tarefas.map((tarefa, i) => {
                return <Card key={i} tarefa={tarefa} posicao={i}/>;
            })}
        </div>
    );
};

