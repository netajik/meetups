import './App.css';
import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
      <Todo text='React course' />
      <Todo text='javascript course' />
    </div>
  );
}

export default App;
