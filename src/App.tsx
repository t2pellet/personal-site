import React from 'react';
import './App.css';
import AboutMe from './section/AboutMe';
import Projects from './section/Projects';
import History from './section/History';
import Contact from './section/Contact';
import NavBar, { NavItem } from './component/NavBar';

const navItems: NavItem[] = [
    { name: 'About Me', id: 'About' },
    { name: 'Projects', id: 'Projects' },
    { name: 'History', id: 'History' },
    { name: 'Get In Touch', id: 'Contact' }
];

function App() {
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
