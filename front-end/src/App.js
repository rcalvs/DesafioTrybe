import Todo from './ToDo.jsx'
import Provider from './context/Provider'

function App() {
  return (
    <Provider>
      <div className="bg-blue-100 h-screen">
        <Todo />
      </div>
    </Provider>
  );
}

export default App;
