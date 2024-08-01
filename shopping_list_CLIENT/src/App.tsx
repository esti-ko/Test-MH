import React from 'react';
import './App.css';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';
import Header from './components/Header';
import CompleteOrder from './components/CompleteOrder';

function App() {
  return (
      <div className="App">
        <Header></Header>
        <AddProduct></AddProduct>
        <ProductList></ProductList>
        <CompleteOrder></CompleteOrder>
      </div>
  );
}

export default App;
