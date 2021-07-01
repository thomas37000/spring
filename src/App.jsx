import Filter from './components/SvgFilter';
import Mount from './components/Mount';
import Mount2 from './components/Mount2';
// import Goo from './components/Goo';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
      </header>
      <Filter />
      <div className='appContainer'>
        <Mount />
        <Mount2 />
      </div>
      {/* <Goo /> */}
    </div>
  );
}

export default App;
