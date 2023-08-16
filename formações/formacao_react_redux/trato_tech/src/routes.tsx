import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DefaultPage } from "../src/components/DefaultPage";
import Home from "../src/pages/Home";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultPage />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
