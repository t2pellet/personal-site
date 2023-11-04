import * as TbIcons from 'react-icons/tb';
import * as FaIcons from 'react-icons/fa6';
import * as SiIcons from 'react-icons/si';

export const Icons = {
  ...TbIcons,
  ...FaIcons,
  ...SiIcons,
};
export type IconKey = keyof typeof Icons;
