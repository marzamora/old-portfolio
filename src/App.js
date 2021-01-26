import './scss/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Showcase from './components/Showcase';
/* ------------------------------------------
* For using icons - see link for more info
* https://fontawesome.com/how-to-use/on-the-web/using-with/react
* fab repsresents all brand icons in free-brands-svg-icons
*/
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faChevronDown);

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
