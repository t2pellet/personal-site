import React from 'react';

import './App.css';
import NavBar, { NavItem } from './component/nav-bar';
import AboutMe from './section/AboutMe';
import Contact from './section/Contact';
import History from './section/History';
import Projects from './section/Projects';

const navItems: NavItem[] = [
    { name: 'About Me', id: 'About' },
    { name: 'Projects', id: 'Projects' },
    { name: 'History', id: 'History' },
    { name: 'Get In Touch', id: 'Contact' }
];

function App(): React.ReactElement {
    return (
        <div className='App'>
            <NavBar items={navItems} />
            <div className='Content'>
                <AboutMe />
                <Projects />
                <History />
                <Contact />
            </div>
        </div>
    );
}

export default App;
