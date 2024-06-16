// src/App.js
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Publications from './pages/Publications';
import Achievements from './pages/Achievements';
import Contact from './pages/Contact';
import GlobalStyles from './components/GlobalStyles';
import Loader from './components/Loader';
import Education from "./pages/Education";

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 3000); // Adjust the timeout duration as needed
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <GlobalStyles />
            {loading ? (
                <Loader />
            ) : (
                <>
                    <Navbar />
                    <main>
                        <Home />
                        <About />
                        <Experience />
                        <Education />
                        <Skills />
                        <Projects />
                        <Publications />
                        <Achievements />
                        <Contact />
                    </main>
                    <Footer />
                </>
            )}
        </>
    );
}

export default App;
