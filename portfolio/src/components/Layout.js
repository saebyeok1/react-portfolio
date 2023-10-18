import Header from './Header';
import Profile from './Profile';
import Project from './Projects';
import Skills from './Skills';
import { useState } from 'react';

export default function Layout() {
    const [toggle, setToggle] = useState(false);

    return (
        <>
            <Header toggle={toggle} setToggle={setToggle} />
            <Profile />
            <Skills />
            <Project />
        </>
    );
}
