import logo from './welcome.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>
          Boas Vindas Turma {process.env.REACT_APP_TURMA}
        </h2>
      </header>
    </div>
  );
}

export default App;
