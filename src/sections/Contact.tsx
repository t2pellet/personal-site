import React from 'react';

import { Box } from '@mui/material';
import KofiButton from 'kofi-btn-react';
import { FaLinkedinIn, FaGithub, FaMailBulk, FaPhoneAlt } from 'react-icons/fa';
import { IoNewspaperOutline } from 'react-icons/io5';

import CenterGrid, { GridItem } from '../components/center-grid';
import Section from '../components/section';
import SocialLink from '../components/social-link';
import Paragraph from '../components/text/paragraph';

export default function Contact(): React.ReactElement {
    return (
        <Section id='Contact' heading='Contact'>
            <Box display='flex' justifyContent='center' marginTop='-8px'>
                <KofiButton user='t2pellet' label='Support me' />
            </Box>
            <br />
            <Paragraph align='center'>{`I'd love to hear from you! You can find my resumé and socials below`}</Paragraph>
            <br />
            <CenterGrid columnSpacing={0}>
                <GridItem xs={4} sm={2} lg={1}>
                    <SocialLink name='GitHub' url='https://github.com/t2pellet/' icon={FaGithub} />
                </GridItem>
                <GridItem xs={4} sm={2} lg={1}>
                    <SocialLink
                        name='LinkedIn'
                        url='https://linkedin.com/in/t2pellet'
                        icon={FaLinkedinIn}
                    />
                </GridItem>
                <GridItem xs={4} sm={2} lg={1}>
                    <SocialLink
                        name='E-mail'
                        url='mailto:t2pellet@uwaterloo.ca'
                        icon={FaMailBulk}
                    />
                </GridItem>
                <GridItem xs={4} sm={2} lg={1}>
                    <SocialLink name='Phone' url='tel:+15145704380' icon={FaPhoneAlt} />
                </GridItem>
                <GridItem xs={4} sm={2} lg={1}>
                    <SocialLink name='Resumé' icon={IoNewspaperOutline} url='/doc/resume.pdf' />
                </GridItem>
            </CenterGrid>
            <br />
        </Section>
    );
}
