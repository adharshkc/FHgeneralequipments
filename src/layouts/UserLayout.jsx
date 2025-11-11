import React from "react";

// ✅ Correct imports
import Header from "../components/Header";
import NavbarComp from "../components/NavbarComp";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton"; // optional if used

const UserLayout = ({ children }) => {
  return (
    <>
      <Header />
      <NavbarComp />
      <main>{children}</main>
      <WhatsAppButton /> {/* Optional */}
      <Footer />
    </>
  );
};

export default UserLayout;

