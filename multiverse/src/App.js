import './App.css';
import HeaderWrapper from './components/header/HeaderWrapper';
import UniverseWrapper from './components/universes/UniverseWrapper';
function App() {
  const universes=[{label: 'Music', active: false}, {label: 'Travel', active: true}, {label: 'Game', active: false}]
  return (
    <div className="App d-flex justify-center">
      <div className='main-wrapper d-flex flex-column min-h-100-vh align-center'>
        <HeaderWrapper />
        <UniverseWrapper universes={universes}/>
      </div>
    </div>
  );
}

export default App;
