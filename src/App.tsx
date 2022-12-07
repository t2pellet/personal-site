import React from 'react';
import './App.css';
import { AppBar, Box, Button, Toolbar } from '@mui/material';
import AboutMe from './section/AboutMe';
import Projects from './section/Projects';
import History from './section/History';

const navItems = ['About Me', 'Projects', 'History', 'Get In Touch'];

const scrollTo = async (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        const scrollOffset = -3 * (window.innerWidth / 100) - 20;
        const scrollPosition = element.offsetTop;
        await element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        await window.scrollTo({ behavior: 'smooth', top: scrollPosition + scrollOffset });
    }
};

function App() {
    return (
        <div className='App'>
            <AppBar position='sticky'>
                <Toolbar>
                    <Box>
                        {navItems.map((item) => (
                            <Button key={item} color='inherit' onClick={() => scrollTo(item)}>
                                {item}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <div className='Content'>
                <AboutMe />
                <Projects />
                <History />
            </div>
        </div>
    );
}

export default App;
