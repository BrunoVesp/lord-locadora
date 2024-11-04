import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';
import Layout from "./Layout";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Carros from "./pages/Carros";
import FaleConosco from "./pages/FaleConosco";
import SobreMim from "./pages/SobreMim";
import { ModalProvider } from "./contexts/ModalContext";
import ScrollToTop from "./components/ScrollToTop";
import CheckoutCarros from "./pages/CheckoutCarro";

function RoutesApp() {
  return (
    <>
      <BrowserRouter>
        <ModalProvider>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="carros" element={<Carros />} />
              <Route path="faleconosco" element={<FaleConosco />} />
              <Route path="sobremim" element={<SobreMim />} />
              <Route path="carros/:id" element={<CheckoutCarros />} />

              <Route path="*" element={<ErrorPage />} />
            </Route>
          </Routes>
        </ModalProvider>
      </BrowserRouter>
    </>
  )
}

export default RoutesApp;
