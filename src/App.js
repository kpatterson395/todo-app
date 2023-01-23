import Todos from "./Todos"
import { ToDoProvider } from "./todo-context2"
import { ViewProvider } from "./view-context";
import "./styles.scss"

function App() {
  return (
    <ToDoProvider>
      <ViewProvider>
        <div className="App">
          <h1 className="Header">To Do App</h1>
          <Todos />
        </div>
      </ViewProvider>
    </ToDoProvider>

  );
}

export default App;
