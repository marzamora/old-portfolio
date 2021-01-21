import './scss/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Showcase from './components/Showcase';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Hero></Hero>
      <Showcase></Showcase>
    </div>
  );
}

export default App;
