import Header from "./components/Header";
import TodoList from "./components/TodoList";


function App() {
  return (
    <div className='container '>
      <div className="row  justify-content-center">
        <div className="col-7 ">
            <Header/>
            <TodoList/>
        </div>
      </div>
    </div>
  );
}

export default App;
