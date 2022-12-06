import React from 'react';
import { Typography } from '@mui/material';
import CenterGrid from '../component/CenterGrid';
import ProjectCard from '../component/ProjectCard';

export default function Projects() {
    return (
        <div id='Projects'>
            <Typography
                alignContent='center'
                justifyContent='center'
                justifySelf='center'
                textAlign='center'
                marginBottom='32px'
                variant='h2'
            >
                Projects
            </Typography>
            <CenterGrid>
                <ProjectCard
                    name='Strawgolem'
                    description='A Java Minecraft mod that adds a farming golem - with over 8 million downloads!'
                    image='/img/strawgolem.png'
                    url='https://github.com/t2pellet/strawgolem'
                />
                <ProjectCard
                    name='Attention App'
                    description='Simple Kotlin Android app so you can pester your SO with annoying notifications'
                    image='/img/attentionapp.png'
                    url='https://github.com/t2pellet/attentionapp'
                />
                <ProjectCard
                    name='FVTT DigitalOcean Bridge'
                    description='Application to simplify hosting FoundryVTT on DigitalOcean. Frontend in React, backend in Express'
                    image='/img/fvttdigitalocean.png'
                    url='https://github.com/orgs/FVTT-DO-Bridge/repositories'
                />
                <ProjectCard
                    name='Salem Moderator'
                    description='React Native app to act as moderator for Salem 1692'
                    image='/img/salem.png'
                    url='https://github.com/t2pellet/SalemModerator'
                />
            </CenterGrid>
        </div>
    );
}
