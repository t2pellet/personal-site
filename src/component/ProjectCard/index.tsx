import React from 'react';
import './style.css';
import { Paper, Typography, useTheme } from '@mui/material';
import Paragraph from '../../text/Paragraph';
import { GridItem } from '../CenterGrid';

type ProjectCardProps = {
    name: string;
    description: string;
    image: string;
    url: string;
};

export default function Index(props: ProjectCardProps) {
    const { name, description, image, url } = props;
    const { palette } = useTheme();
    return (
        <GridItem xs={11} sm={6} md={4} lg={3}>
            <Paper
                className='ProjectCard'
                onClick={() => {
                    const tab = window.open(url, '_blank');
                    if (tab != null) tab.focus();
                }}
            >
                <img className='ProjectCardImage' src={image} alt={name} />
                <div
                    className='ProjectCardBody'
                    style={{ backgroundColor: palette.background.paper }}
                >
                    <Typography variant='h5'>{name}</Typography>
                    <Paragraph size='14px'>{description}</Paragraph>
                </div>
                <div className='ProjectCardLink'>
                    <Paragraph colour='text.primary'>Check it Out!</Paragraph>
                </div>
            </Paper>
        </GridItem>
    );
}
