import React, { PropsWithChildren } from 'react';
import { Typography } from '@mui/material';

export default function Paragraph(props: PropsWithChildren) {
    const { children } = props;
    return (
        <Typography variant='body1' paragraph color='text.secondary'>
            {children}
        </Typography>
    );
}
