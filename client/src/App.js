import './assets/css/App.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './router/Router.js';

import Navbar from './components/navbar/navbar'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Router/>
      </div>
    </BrowserRouter>
  );
}

export default App;
