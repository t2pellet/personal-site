import React from 'react';

import { Tooltip } from '@mui/material';
import { IconType } from 'react-icons';

type Props = {
    type: IconType;
};

export default function DynamicIcon({ type }: Props): React.ReactElement {
    const getSliceIndex = (str: string): number => {
        const matches = str.match(/[A-Z]/g);
        if (matches) {
            const match = matches[matches.length - 1];
            return str.lastIndexOf(match);
        }
        return 2;
    };

    const name = type.name.substring(getSliceIndex(type.name));
    return (
        <Tooltip title={name}>
            <div>{type({ size: '2rem', color: '#0dcaf0' })}</div>
        </Tooltip>
    );
}
