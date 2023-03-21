import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { About, FormPage, Home, NotFoundPage } from './pages';

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="form" element={<FormPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    );
  }
}

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;
