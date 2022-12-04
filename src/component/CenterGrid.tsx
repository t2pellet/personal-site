import React, { PropsWithChildren } from 'react';
import Grid from '@mui/material/Unstable_Grid2';

export default function CenterGrid(props: PropsWithChildren) {
    const { children } = props;
    return (
        <Grid
            container
            alignContent='center'
            justifyContent='center'
            justifySelf='center'
            columnSpacing={4}
        >
            {children}
        </Grid>
    );
}

export const GridItem = Grid;
