import React, { useState } from 'react';
import './styles.css';
import Header from './Header';
import Main from './Main';

export default function App() {
  const [selectedItem, setSelectedItem] = useState("À Propos");

  const handleSelectItem = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className=".app-container" style={{ display: 'flex', flexDirection: 'row' }}>
      <Header onSelectItem={handleSelectItem} />
      <Main selectedItem={selectedItem} />
    </div>
  );
}
