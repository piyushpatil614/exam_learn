
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import NoPage from "./components/NoPage";
import Layout from './components/Layout';
import Table from './components/Table';
import Quiz from './components/Quiz';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="quiz" element={<Quiz />} />
          <Route path="table" element={<Table />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
