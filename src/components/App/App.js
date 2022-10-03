import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Details from '../DetailsPage/Details';
import Home from '../HomePage/Home';

function App() {
  return (

    <main className="">

      <header className="">
        <NavBar />
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Details" element={<Details />} />
      </Routes>

    </main>

  );
}

export default App;
