import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './pages/ProductList';
import ProductDetails from './pages/ProductDetails';
import CategoryList from './pages/CategoryList';
import UserList from './pages/UserList';
import Cart from './pages/Cart';
import CategoryDetails from './pages/CategoryDetails';
import Navbar from './components/Header';
import Footer from './components/Footer';

function App() {
    return (
        <>
            <Router>
                <div className="app-container">
                    <Navbar />
                    <main className="app-main">
                        <Routes>
                            <Route exact path="/" element={<ProductList />} />
                            <Route exact path="/ipix-eCommerce" element={<ProductList />} />
                            <Route path="/product/:id" element={<ProductDetails />} />
                            <Route path="/categories" element={<CategoryList />} />
                            <Route path="/categories/:categoryId/products" element={<CategoryDetails />} />
                            <Route path="/users" element={<UserList />} />
                            <Route path="/cart" element={<Cart />} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </Router>
        </>
    )
}

export default App;
