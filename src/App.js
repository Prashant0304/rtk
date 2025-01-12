import Counter from "./features/counter/Counter";
import Posts from "./features/posts/Posts";
import AddTodo from "./features/todo/AddTodo";
import TodoList from "./features/todo/TodoList";


function App() {
  return (
    <div className="todoWrapper">
      <Counter/>
      <hr/>
    
      <AddTodo/>
      <TodoList/>
      <Posts/>
    </div>
  );
}

export default App;

