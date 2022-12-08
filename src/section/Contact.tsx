import React from 'react';
import { FaLinkedinIn, FaGithub, FaMailBulk, FaPhoneAlt } from 'react-icons/fa';
import { IoNewspaperOutline } from 'react-icons/io5';
import CenterGrid, { GridItem } from '../component/CenterGrid';
import Section from '../component/Section';
import Paragraph from '../text/Paragraph';
import SocialLink from '../component/SocialLink';

export default function Contact() {
    return (
        <Section id='Contact' heading='Contact'>
            <center>
                <Paragraph>{`I'd love to hear from you! You can find my resumé and socials below`}</Paragraph>
            </center>
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
                    <SocialLink name='Phone' url='+15145704380' icon={FaPhoneAlt} />
                </GridItem>
                <GridItem xs={4} sm={2} lg={1}>
                    <SocialLink name='Resumé' icon={IoNewspaperOutline} url='/doc/resume.pdf' />
                </GridItem>
            </CenterGrid>
        </Section>
    );
}
