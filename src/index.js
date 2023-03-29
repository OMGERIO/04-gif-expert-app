import React from 'react';
import ReactDOM from 'react-dom/client';
import { GifExpertApp } from './GifExpertApp';
import './index.css';




// const apiKey = 'PZK2gYzhvd6eerXCx3mm3v1UdmLi5qSo'; 

// const peticion = fetch(`http://api.giphy.com/v1/gifs/search?api_key=${apiKey}`);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GifExpertApp />
);
