
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import Tasks from './components/Tasks';

function App() {
  return (
    <div className="App">
      <Header />
      <Search></Search>
      <Tasks></Tasks>
    </div>
  );
}

export default App;
