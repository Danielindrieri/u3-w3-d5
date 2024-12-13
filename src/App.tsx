import Sidebar from './components/sidebar';
import music from './assets/logos/music.svg';
import Main from './components/main';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Canzoniere from './components/Canzoniere';
// {MI DISPIACE NON SONO RIUSCITO A COMPLETARLO}

function App() {
  return (
    <div>
      <Sidebar musicPro={music} />
      <Main  />
      <Canzoniere/>
    </div>
  );
}

export default App;
