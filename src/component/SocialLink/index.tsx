import React from 'react';
import { IconType } from 'react-icons';
import Paragraph from '../../text/Paragraph';
import './style.css';

type SocialLinkProps = {
    name: string;
    icon: IconType;
    url: string;
};

export default function SocialLink(props: SocialLinkProps) {
    const { name, icon, url } = props;
    return (
        <div className='SocialLink'>
            <a href={url} target='_blank' rel='noreferrer noopener'>
                {icon({ style: { color: '#0dcaf0' } })}
                <Paragraph>{name}</Paragraph>
            </a>
        </div>
    );
}
