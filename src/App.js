import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import abmClientes from "./abmClientes";

export default function Form() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/abm" element={<abmClientes></abmClientes>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
