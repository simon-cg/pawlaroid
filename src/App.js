import React, { useState } from 'react';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';

import Login from './comps/Login';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import Features from './comps/Features';

function App() {

  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <Title />
      <ThemeProvider>
        <CSSReset />
      <Features />
      <Login />
      </ThemeProvider>
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && (
        <Modal
        selectedImg={selectedImg}
        setSelectedImg={setSelectedImg}
        />) }
    </div>
  );
}

export default App;
