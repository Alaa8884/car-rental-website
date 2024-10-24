import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Blog from "../pages/Bolg";
import BlogDetails from "../pages/BlogDetails";
import Cars from "../pages/Cars";
import CarDetails from "../pages/CarDetails";
import ErrorPage from "../pages/ErrorPage";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import BecomeDriver from "../pages/BecomeDriver";

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:blogId" element={<BlogDetails />} />
      <Route path="/cars" element={<Cars />} />
      <Route path="/cars/:carName" element={<CarDetails />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/becomeDriver" element={<BecomeDriver />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default Routers;
