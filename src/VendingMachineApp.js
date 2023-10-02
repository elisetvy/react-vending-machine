import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Snack from "./Snack";
import VendingMachine from "./VendingMachine";
import Navbar from "./Navbar";

function VendingMachineApp() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<VendingMachine />} />
        <Route path="/snacks/:name" element={<Snack/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default VendingMachineApp;