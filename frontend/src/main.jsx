import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import "../../index.css";
import NumberGuessingGame from "./NumberGuessingGame.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NumberGuessingGame />
  </StrictMode>
);
