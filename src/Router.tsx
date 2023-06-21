import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomeSection } from "./pages/HomeSection";
import { IntroSection } from "./pages/IntroSection";
import { ArraySection } from "./pages/ArraySection";
import { LinkedListSection } from "./pages/LinkedListSection";
import { StackSection } from "./pages/StackSection";
import { QueueSection } from "./pages/QueueSection";
import { TreesSection } from "./pages/TreesSection";
import App from "./App";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/intro" element={<IntroSection />} />
          <Route path="/array" element={<ArraySection />} />
          <Route path="/list" element={<LinkedListSection />} />
          <Route path="/stack" element={<StackSection />} />
          <Route path="/queue" element={<QueueSection />} />
          <Route path="/tree" element={<TreesSection />} />
          <Route index element={<HomeSection />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
