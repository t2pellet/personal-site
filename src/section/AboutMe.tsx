import React from 'react';
import { Typography } from '@mui/material';
import CenterGrid, { GridItem } from '../component/CenterGrid';
import StyledText from '../text/StyledText';
import Paragraph from '../text/Paragraph';

export default function AboutMe() {
    return (
        <div id='About Me'>
            <CenterGrid>
                <GridItem xs={11} md={5}>
                    <img className='ProfileImage' src='/headshot.jpg' alt='Profile' width='100%' />
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
                        {`I love developing tangible, user-facing features, and feel I'm at my best when I can see my work, and the product I'm working on have real customer impact`}
                    </Paragraph>
                    <Paragraph>
                        {`I've worked with TypeScript, JavaScript and React, as well as Java, Spring and C#, Unity`}
                    </Paragraph>
                    <Paragraph>
                        {`But above all, I'm still trying to learn and be challenged by new tools, frameworks and roles`}
                    </Paragraph>
                    <Paragraph>
                        {`Outside of programming, I'm learning to play the guitar, and love music, photography, board games and D&D!`}
                    </Paragraph>
                </GridItem>
            </CenterGrid>
        </div>
    );
}
