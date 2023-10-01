import logo from './logo.svg';
import './App.css';
import Header from './header';
import Main from './main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Browse from './Browsing';

function App() {
  return (
    <>
    <Header />
    <Router>
      <Routes>
      <Route path="/" Component={Main} ></Route>
      <Route path ="/Browse" Component ={Browse}></Route>
      </Routes>
    </Router>
    </>
    
  );

}

export default App;
