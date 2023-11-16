import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Categories from './components/Categories';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path='/' element={<Home/>}/> 
          <Route path='/catalog' element={<Categories/>}/> 
        </Routes>
      </div>
    </div>
  );
}

export default App;
