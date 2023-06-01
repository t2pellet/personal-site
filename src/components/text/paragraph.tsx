import React, { PropsWithChildren } from 'react';

import { Typography } from '@mui/material';

type ParagraphProps = PropsWithChildren & {
    colour?: string;
    size?: string;
    align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
};

const defaultProps = {
    colour: 'text.secondary',
    size: '16px',
    align: 'inherit'
};

function Paragraph({ children, colour, size, align }: ParagraphProps): React.ReactElement {
    return (
        <Typography variant='body1' paragraph color={colour} fontSize={size} textAlign={align}>
            {children}
        </Typography>
    );
}

Paragraph.defaultProps = defaultProps;

export default Paragraph;
