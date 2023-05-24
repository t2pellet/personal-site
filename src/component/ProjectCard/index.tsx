import React from 'react';
import './style.css';
import { Paper, Typography, useTheme } from '@mui/material';
import Paragraph from '../../text/Paragraph';
import { GridItem } from '../CenterGrid';

type ProjectCardProps = {
    name: string;
    description: string;
    image: string;
    url?: string;
    repo: string
};

export default function ProjectCard({ name, description, image, url, repo }: ProjectCardProps) {
    const { palette } = useTheme();

    const openUrl = (openingUrl: string) => {
        const tab = window.open(openingUrl, '_blank');
        if (tab != null) tab.focus();
    }

    return (
        <GridItem xs={11} sm={6} md={4} lg={3}>
            <Paper
                className='ProjectCard'
                onClick={() => url && openUrl(url)}
            >
                <img className='ProjectCardImage' src={image} alt={name} />
                <div
                    className='ProjectCardBody'
                    style={{ backgroundColor: palette.background.paper }}
                >
                    <Typography variant='h5'>{name}</Typography>
                    <Paragraph size='14px'>{description}</Paragraph>
                </div>
                <div className='ProjectCardLink' onClickCapture={(e) => {
                    e.stopPropagation()
                    openUrl(repo)
                }}>
                    <Paragraph colour='text.primary'>Source Code</Paragraph>
                </div>
            </Paper>
        </GridItem>
    );
}
