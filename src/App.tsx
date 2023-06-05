import Header from "./Header/Header";
import { List } from "./Lista/List";
import { TodoProvider } from "./context/TodoProvider";

function App() {
    return (
        <TodoProvider>
            <Header />
            <List />
        </TodoProvider>
    );
}

export default App;
