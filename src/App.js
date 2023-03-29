import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
export function WrappedApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}
