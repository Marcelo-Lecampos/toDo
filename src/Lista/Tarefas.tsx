import { EmptyList } from "./EmptyList";
import { FullList } from "./FullList";

interface Tarefas {
    tarefas: string[];
}
export function Tarefas({ tarefas }: Tarefas) {
    return tarefas.length > 0 ? 
    <FullList tarefas={tarefas} /> : 
    <EmptyList />;
}
