import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomeSection } from "./pages/HomeSection";
import { IntroSection } from "./pages/IntroSection";
import App from "./App";
import { ArraySection } from "./pages/ArraySection";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/intro" element={<IntroSection />} />
          <Route path="/array" element={<ArraySection />} />
          <Route index element={<HomeSection />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
