import React from 'react';
import './App.css';
import Header from './Header';
import ItemList from './ItemList';
import Data from "./OFF_subset17.json";



function App() {
  return (
    <div className="ui container">
      <Header />
      <ItemList Data={Data} />
    </div>
  );
}

export default App;
