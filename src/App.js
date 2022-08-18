import './App.css';
import Banner from './components/Banner';
import Services from './components/Services';
import Navbar from './components/Navbar';
import CategoriesStore from './components/CategoriesStore';
import Sustentability from './components/Sustentability';
import ItemSale from './components/ItemSale';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Services />
      <CategoriesStore />
      <Sustentability />
      <ItemSale />
    </div>
  );
}

export default App;
