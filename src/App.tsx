import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductComponents from './components/ProductComponents';
import Sketches from './components/Sketches';
import Packaging from './components/Packaging';
import Creator from './components/Creator';
import Footer from './components/Footer';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <Hero />
        <ProductComponents />
        <Sketches />
        <Packaging />
        <Creator />
      </main>
      <Footer />
    </div>
  );
}

export default App;
