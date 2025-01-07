import React from "react";
import Logo from "./components/Logo";
import Products from "./components/Products";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-light via-accent/20 to-light">
      {/* Dekoratif arka plan desenleri */}
      <div className="fixed inset-0 z-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/20 rounded-full filter blur-3xl animate-float" />
        <div
          className="absolute bottom-0 right-0 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Ana içerik */}
      <div className="relative z-10 py-10 px-4">
        <Logo />
        <Products />
      </div>
    </div>
  );
};

export default App;
