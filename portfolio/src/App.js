import Header from './components/Header';
import Profile from './components/Profile';
import Project from './components/Projects';
import ProjectsDetail from './components/ProjectsDetail';
import Skills from './components/Skills';
import Memo from './components/Memo';
import { useState } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Layout2 from './components/Layout2';
import Footer from './components/Footer';
import ScrollUp from './components/Scrollup';

function App() {
    // const [toggle, setToggle] = useState(false);

    return (
        <>
            <BrowserRouter>
                {/* <Project /> */}
                <Routes>
                    <Route path="/" element={<Layout />} />
                    <Route path="/project" element={<Layout2 />} />
                </Routes>
            </BrowserRouter>
            {/* <Memo /> */}
            <ScrollUp />
            <Footer />
        </>
    );
}

export default App;
