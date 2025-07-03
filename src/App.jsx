import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Hotels from "./components/pages/Hotels";
import ProfileForm from "./components/pages/ProfileForm";
import SweetDetails from "./components/pages/SweetDetails";
import MyBookings from "./components/pages/MyBookings";
import PageNotFound from "./components/pages/PageNotFound";
import HotelDetails from "./components/pages/HotelDetails";
import Footer from "./components/footer/Footer";
import Contact from "./components/pages/Contact";
import Experience from "./components/pages/Experience";
import About from "./components/pages/About";
import Profile from "./components/pages/Profile";

const App = () => {
  const isOwnerPath = useLocation().pathname.includes("owner");
  return (
    <>
      {!isOwnerPath && <Navbar />}
      <div className=".modal-fullscreen-md-down">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/rooms" element={<Hotels />}></Route>
          <Route path="/profile-form" element={<ProfileForm />} />
          <Route path="/rooms/:id" element={<SweetDetails />} />
          <Route path="/details/:id" element={<HotelDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/review" element={<Experience />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/my-bookings" element={<MyBookings />} />
          <Route path="*" element={<PageNotFound />} />
          
        </Routes>
        <Footer/>
      </div>
    </>
  );
};

export default App;
