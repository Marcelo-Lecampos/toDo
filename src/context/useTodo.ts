import { useContext } from "react";
import { ToDoContext } from "./TodoContext";

export const useTodo = () => {
    const context = useContext(ToDoContext);

    if (!context) {
        throw new Error("useTodo must be used within a TodoProvider");
    }

    return context;
}