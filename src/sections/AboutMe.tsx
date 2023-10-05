import React from 'react';

import { ButtonBase, Link, Typography } from '@mui/material';
import KofiButton from 'kofi-btn-react';

import scrollTo from '@/util/scroll';

import CenterGrid, { GridItem } from '../components/center-grid';
import Section from '../components/section';
import Paragraph from '../components/text/paragraph';
import StyledText from '../components/text/styled-text';

export default function AboutMe(): React.ReactElement {
    return (
        <Section id='About'>
            <CenterGrid rowSpacing={0}>
                <GridItem xs={11} md={5}>
                    <img
                        className='ProfileImage'
                        src='/img/headshot.jpg'
                        alt='Profile'
                        width='100%'
                    />
                </GridItem>
                <GridItem xs={11} md={7}>
                    <br />
                    <Typography variant='h1'>
                        <StyledText bold colour='#0dcaf0'>
                            Tenzin
                        </StyledText>{' '}
                        Pelletier
                    </Typography>
                    <br />
                    <Paragraph>
                        <StyledText bold>Hi :)</StyledText>
                        {` I'm Tenzin, a 4th year Computer Science student @ UWaterloo`}
                    </Paragraph>
                    <Paragraph>
                        {`I love developing tangible, user-facing features, and feel I'm at my best when I can see my work, and the products I'm working on have real customer impact.`}
                    </Paragraph>
                    <Paragraph>
                        {`I excel with TypeScript, JavaScript and React, but I've also worked with Java and Spring, C# and Unity.`}
                    </Paragraph>
                    <Paragraph>
                        {`Outside of programming, I'm learning to play the guitar, and enjoy music, photography, board games and D&D!`}
                    </Paragraph>
                    <Paragraph>
                        {`If you like some of the work I've done (like Metalworks or Strawgolem), feel free to `}
                        <Link
                            style={{ textDecoration: 'none', cursor: 'pointer' }}
                            onClick={() => scrollTo('Contact')}
                        >
                            <StyledText bold>reach out</StyledText>
                        </Link>
                    </Paragraph>
                </GridItem>
            </CenterGrid>
        </Section>
    );
}
