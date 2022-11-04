import './App.css';
import Navbar from './Components/Navbar';
import React, { useState } from 'react';
import Newsarea from './Components/Newsarea';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import TopButton from './Components/TopButton';
import SearchNewsArea from './Components/SearchNewsArea';


const App = () => {
  const pageSize = 20;
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;
  const [progress, setProgress] = useState(0);
  const [searchVal, setSearchVal] = useState("");
  return (
    <Router>
      <div style={{ position: "relative" }}>
        <div style={{ position: "sticky", top: "0", zIndex: "20" }}><Navbar searchVal={searchVal} setSearchVal={setSearchVal} /></div>
        <LoadingBar height={3} color='#f11946' />
        <Routes>
          <Route exact path="/"
            element={<Newsarea key="general" setProgress={setProgress} pageSize={pageSize} apiKey={apiKey} category="general" />} />
          <Route exact path="/business"
            element={<Newsarea key="business" setProgress={setProgress} pageSize={pageSize} apiKey={apiKey} category="business" />} />
          <Route exact path="/entertainment"
            element={<Newsarea key="entertainment" setProgress={setProgress} pageSize={pageSize} apiKey={apiKey} category="entertainment" />} />
          <Route exact path="/health"
            element={<Newsarea key="health" setProgress={setProgress} pageSize={pageSize} apiKey={apiKey} category="health" />} />
          <Route exact path="/science"
            element={<Newsarea key="science" setProgress={setProgress} pageSize={pageSize} apiKey={apiKey} category="science" />} />
          <Route exact path="/sports"
            element={<Newsarea key="sports" setProgress={setProgress} pageSize={pageSize} apiKey={apiKey} category="sports" />} />
          <Route exact path="/technology"
            element={<Newsarea key="technology" setProgress={setProgress} pageSize={pageSize} apiKey={apiKey} category="technology" />} />
          <Route exact path="/search"
          element={<SearchNewsArea key={searchVal} setProgress={setProgress} searchVal={searchVal} pageSize={pageSize} apiKey={apiKey}  />} />
        </Routes>
        <Footer />
      </div>
      <TopButton />
    </Router>
  )
}

export default App