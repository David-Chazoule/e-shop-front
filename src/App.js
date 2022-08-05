import {useState, useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import BodyContainer from './components/BodyContainer';
import Header from './components/header/Header';
// import FiltrerContainer from './components/filter/FilterContainer';
import Footer from './components/Footer/Footer';
import Auth from './context/Auth'

import './App.css';

function App() {
  const [userInfo, setUserInfo] = useState({});
  const [basket, setBasket] = useState([]);
  const [tag, setTag] = useState({});
  return (
    <Auth.Provider value={{userInfo, setUserInfo, basket, setBasket, tag, setTag}}>
    <div className="App">

      
   <Header value={{userInfo, setUserInfo, basket, setBasket}}/>

  {/* <FiltrerContainer /> */}

  <BodyContainer value={{userInfo, setUserInfo, tag, setTag}} />
  <Footer />
    </div>
    </Auth.Provider>
  );
}

export default App;
