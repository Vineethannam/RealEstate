import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import ForRent from './pages/ForRent';
import ForSale from './pages/ForSale';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/for-rent" element={<ForRent />} />
            <Route path="/for-sale" element={<ForSale />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
