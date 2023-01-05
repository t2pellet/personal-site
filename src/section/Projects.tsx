import React from 'react';
import CenterGrid from '../component/CenterGrid';
import ProjectCard from '../component/ProjectCard';
import Section from '../component/Section';

export default function Projects() {
    return (
        <Section id='Projects' heading='Projects'>
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
                    name='Metalworks'
                    description='Application to simplify hosting FoundryVTT on DigitalOcean, using React and Express (WIP)'
                    image='/img/fvttdigitalocean.png'
                    url='https://github.com/orgs/Foundry-Metalworks/repositories'
                />
                <ProjectCard
                    name='Salem Moderator'
                    description='React Native app to act as moderator for Salem 1692'
                    image='/img/salem.png'
                    url='https://github.com/t2pellet/SalemModerator'
                />
                <ProjectCard
                    name='Portfolio Site'
                    description="This website you're on! Made with React"
                    image='/img/website.png'
                    url='https://github.com/t2pellet/t2pellet.me'
                />
            </CenterGrid>
        </Section>
    );
}
