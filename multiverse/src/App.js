import './App.css';
import HeaderWrapper from './components/header/HeaderWrapper';
import UniverseWrapper from './components/universes/UniverseWrapper';
function App() {
  const universes=[{label: 'Music', active: false}, {label: 'Travel', active: true}, {label: 'Game', active: false}, {label: 'Dance', active: false}, {label: 'Tech', active: false},{label: 'Math', active: false}, {label: 'Herion', active: false}]
  return (
    <div className="App d-flex align-center flex-column">
      <div className='main-wrapper d-flex flex-column min-h-100-vh align-center'>
        <HeaderWrapper />
        <UniverseWrapper universes={universes}/>
      </div>

      <div style={{height: '60px'}} className='d-flex border-blue'>
        {universes.map((universe_data)=>{
          return <div className="border-black"> {universe_data.label} </div>
        })}
      </div>
    </div>
  );
}

export default App;
