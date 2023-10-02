import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Snack from "./Snack";

function VendingMachine() {
  return (
    <div>
      <h1>Vending Machine</h1>
      <ul>
      <li><Link to="/"></Link></li>
      <li><Link to="/snacks/chips">Chips</Link></li>
      <li><Link to="/snacks/soda">Soda</Link></li>
      <li><Link to="/snacks/candy">Candy</Link></li>
      </ul>
    </div>
  )
}

export default VendingMachine;