import React, { PropsWithChildren } from 'react';
import { Typography } from '@mui/material';

type ParagraphProps = PropsWithChildren & {
    colour?: string;
    size?: string;
};

const defaultProps: ParagraphProps = {
    colour: 'text.secondary',
    size: '16px'
};

function Paragraph(props: ParagraphProps) {
    const { children, colour = defaultProps.colour, size = defaultProps.size } = props;
    return (
        <Typography variant='body1' paragraph color={colour} fontSize={size}>
            {children}
        </Typography>
    );
}

Paragraph.defaultProps = defaultProps;

export default Paragraph;
