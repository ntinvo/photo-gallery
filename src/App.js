import React, { Component } from 'react';
import './App.css';
import PhotoGallery from './components/PhotoGallery.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PhotoGallery />
      </div>
    );
  }
}

export default App;
