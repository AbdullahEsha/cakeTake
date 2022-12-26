import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from './components/pages/HomePage';
import Layout from './components/shared/Layout';
import SearchPage from './components/pages/SearchPage';
import MemberPage from './components/pages/MemberPage';
import ShopPage from './components/sections/ShopPage';


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/member" element={<MemberPage />} />
          <Route path="/shop" element={<ShopPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
