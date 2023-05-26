import React from 'react';

import * as DiIcons from 'react-icons/di';
import * as SiIcons from 'react-icons/si';
import * as TbIcons from 'react-icons/tb';

const Icons = { ...DiIcons, ...SiIcons, ...TbIcons };
export type IconKey = keyof typeof Icons;

type Props = {
    type: IconKey;
};

export default function DynamicIcon({ type }: Props): React.ReactElement {
    // eslint-disable-next-line import/namespace
    const IconComponent = Icons[type];

    if (IconComponent) return <IconComponent size='2rem' color='#0dcaf0' />;
}
