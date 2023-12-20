import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/FirstComponent';
import TemplateExpressions from './components/TemplateExpressions';
import Eventos from './components/Eventos';
import RenderCondicional from './components/RenderCondicional';
import Challenge from './components/Challenge';

import toy from './assets/toy-story.jpeg'
import Hooks from './components/Hooks';
import Listas from './components/Listas';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <h1>Hello, World!</h1>
      <p>Oii</p>

      <FirstComponent />
      <FirstComponent />

      <TemplateExpressions/>

      <Eventos/>

      <RenderCondicional/>

      <Challenge />

      <Hooks/>

      <Listas/>

      <Card nome="Poliana" idade="24" profissao="Professora"/>
      <Card nome="Ana Luiza" idade="56" profissao="Arquiteta"/>

      <img src="/hakuna-matata.jpeg" alt="Rei Leão"/>

      <img src={toy} alt="Toy Story"/>
      
    </div>
  );
}

export default App;
