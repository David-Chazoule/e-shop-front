import BodyContainer from './components/BodyContainer';

import Header from './components/header/Header';
import FiltrerContainer from './components/filter/FilterContainer';
import Footer from './components/Footer/Footer';

import './App.css';

function App() {
  return (
    <div className="App">

      
   <Header />   
  <FiltrerContainer />
  <BodyContainer />
  <Footer />
    </div>
  );
}

export default App;
