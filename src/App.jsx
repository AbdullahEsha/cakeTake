import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Layout from './components/shared/Layout'
import HomePage from './components/pages/HomePage'
import SearchPage from './components/pages/SearchPage'
import MemberPage from './components/pages/MemberPage'
import ShopPage from './components/pages/ShopPage'
import Login from './components/pages/Login'
import SignUp from './components/pages/SignUp'
import { Notfound } from './components/pages/Notfound'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/member" element={<MemberPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
