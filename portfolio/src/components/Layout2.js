import Header2 from './Header2';
import ProjectsDetail from './ProjectsDetail';
import { useState } from 'react';

export default function Layout2() {
    const [toggle, setToggle] = useState(false);

    return (
        <>
            <Header2 toggle={toggle} setToggle={setToggle} />
            <ProjectsDetail />
        </>
    );
}
