import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Experience from "./pages/Experience";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/skills" element={<Skills />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/experience" element={<Experience />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </>
  );
};
export default App;
