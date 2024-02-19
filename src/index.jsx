import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import App from "./App";
import Container from "./elements/Container";
import Login from "./components/session/Login";
import Register from "./components/session/Register";
import ExpenseEdit from "./components/expenses/ExpenseEdit";
import ExpenseList from "./components/expenses/ExpenseList";
import ExpensesByCategory from "./components/expenses/ExpensesByCategory";

const Index = () => {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/categories" element={<ExpensesByCategory />} />
          <Route path="/list" element={<ExpenseList />} />
          <Route path="/edit/:id" element={<ExpenseEdit />} />
          <Route path="/" element={<App />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Index />);
