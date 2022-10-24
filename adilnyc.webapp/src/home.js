import React, { useState } from 'react';
import Title from './components/Title';
import ImageGrid from './components/ImageGrid';
import Modal from './components/Modal';

function HomeApp() {
  const path  = process.env.REACT_APP_SECRET_KEY
console.log(path)
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <Title/>
      <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default HomeApp;