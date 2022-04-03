import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import ReviewsPage from './components/ReviewsPage/ReviewsPage';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/reviews' element={<ReviewsPage />} /> 
      </Routes>
    </div>
  );
}

export default App;
