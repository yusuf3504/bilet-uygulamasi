import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header'; // 'Header' bileşenini büyük harfle başlatın
import Otobus from './Otobus';
import Ucak from './Ucak';
import Araba from './Araba';
import Tekne from './Tekne';
import Otel from './Otel'; // 'Otel' bileşenini içe aktarın

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('bus');

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <Router>
      <div className='bilet'>
        <Header onSelectCategory={handleCategorySelect} /> {/* 'Header' bileşenini JSX'te büyük harfle başlatın */}
        <Routes>
          <Route path="/" element={<Otobus />} />
          <Route path="/ucak" element={<Ucak />} />
          <Route path="/araba" element={<Araba />} />
          <Route path="/tekne" element={<Tekne />} />
          <Route path="/otel" element={<Otel />} /> 
        </Routes>
      </div>
    </Router>
  );
}
