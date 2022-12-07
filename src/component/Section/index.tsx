import React, { PropsWithChildren } from 'react';
import { Typography } from '@mui/material';
import './style.css';

type SectionProps = PropsWithChildren & {
    id: string;
    noHeading?: boolean;
};
const defaultProps = {
    noHeading: false
};

function Section(props: SectionProps) {
    const { id, noHeading, children } = props;
    return (
        <div className='Section' id={id}>
            {!noHeading && (
                <Typography
                    alignContent='center'
                    justifyContent='center'
                    justifySelf='center'
                    textAlign='center'
                    marginBottom='32px'
                    variant='h2'
                >
                    {id}
                </Typography>
            )}
            {children}
        </div>
    );
}

Section.defaultProps = defaultProps;
export default Section;
