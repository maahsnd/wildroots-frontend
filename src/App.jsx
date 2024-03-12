import './App.css';
import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';
import About from './components/About/About';
import Farm from './components/Farm/Farm';
import { Routes, Route } from 'react-router-dom';
import { PublicLayout } from './components/PublicLayout';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/farm" element={<Farm />} />
      </Route>
    </Routes>
  );
}
