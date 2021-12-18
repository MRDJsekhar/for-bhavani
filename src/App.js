import React from "react";
import UsersWithReduxThunk from "./redux-thunk/UsersWithReduxThunk";
import Login from "./pages/Login";
import { Routes, Route } from "react-router";
import ProductGrid from "./pages/ProductGrid";

const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/thunk" element={<UsersWithReduxThunk />} />
        <Route exact path="/grid" element={<ProductGrid />} />
      </Routes>
    </div>
  );
};

export default App;
