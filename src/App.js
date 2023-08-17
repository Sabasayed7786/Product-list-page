
import './App.css';
import Navbar from './component/Navbar/Navbar';
import ProductPage from './component/Product/Product';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductDetails from './component/ProductDetails/ProductDetails';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <main>
        <ProductPage />
      </main> */}

      <div>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductPage/>}/>
          <Route path="/product-details/:id" element={<ProductDetails/>}/>
        </Routes>
        </BrowserRouter>
      </div>
      

    </div>
  );
}

export default App;
