import React from 'react';
import './style.css';

type Props = {
    text: string;
    color?: string;
    id: string;
};

const KofiButton: React.FC<Props> = ({ text, color = '#29abe0', id }: Props) => {
    return (
        <div className='KofiBtnContainer'>
            <a
                title='Support me on ko-fi.com'
                className='KofiButton'
                style={{ backgroundColor: color }}
                href={`https://ko-fi.com/${id}`}
                target='_blank'
                rel='noreferrer'
            >
                <span className='KofiText'>
                    <img
                        src='https://storage.ko-fi.com/cdn/cup-border.png'
                        alt='Ko-fi donations'
                        className='KofiImg'
                    />
                    {text}
                </span>
            </a>
        </div>
    );
};

export default KofiButton;
