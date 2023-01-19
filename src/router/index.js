import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AboutScreen, AllCharactersScreen, HomeScreen } from "../screens";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/characters" element={<AllCharactersScreen />} />
        <Route path="/about" element={<AboutScreen />} />
      </Routes>
    </BrowserRouter>
  );
};
