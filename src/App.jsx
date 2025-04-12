import { useState } from "react";
import AuctionContainer from "./MyComponents/AuctionContainer/AuctionContainer";
import Footer from "./MyComponents/Footer";
import HeroSection from "./MyComponents/HeroSection";
import Navbar from "./MyComponents/Navbar";
import ToastNotification from "./MyComponents/Toast/ToastNotification";
import BasicMoreOptions from "./MyComponents/Toast/ToastNotification";
import { toast, ToastContainer } from "react-toastify";
import { ThemeProvider } from "./Theme/ThemeProvider";
import HeartButton from "./MyComponents/HeartButton";
import FavoriteList from "./MyComponents/FavoriteItems ";

function App() {
  const [bidProducts, setBidProducts] = useState([]);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="bg-background">
        <Navbar bidProducts={bidProducts} />
      </div>

      <main className="font-sora ">
        <HeroSection />
        <AuctionContainer
          bidProducts={bidProducts}
          setBidProducts={setBidProducts}
        />
      </main>

      <Footer />
      <ToastNotification />
      <FavoriteList />
    </ThemeProvider>
  );
}

export default App;
