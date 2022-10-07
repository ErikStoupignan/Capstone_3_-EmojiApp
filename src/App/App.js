import './App.css';
import { Route, Routes } from 'react-router-dom';
import Details from '../components/DetailsPage/Details';
import Home from '../components/HomePage/Home';

function App() {
  return (
    <main>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/HomePage" element={<Home />} />
        <Route path="/DetailsPage" element={<Details />} />

      </Routes>

    </main>
  );
}

export default App;
