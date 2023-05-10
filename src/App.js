import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Index from "./pages";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" exact element={<Index />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
