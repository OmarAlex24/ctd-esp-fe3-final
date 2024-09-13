import { useEffect } from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { ContextProvider, useAppContext } from './Components/utils/global.context';

function AppContent() {
  const { state } = useAppContext();

  useEffect(() => {
    document.body.classList.toggle('dark', state.theme === 'dark');
  }, [state.theme]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dentist/:id" element={<Detail />} />
          <Route path="/favs" element={<Favs />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ContextProvider>
      <Router>
        <AppContent />
      </Router>
    </ContextProvider>
  );
}

export default App;
