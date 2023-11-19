import { LabeledIconProps } from '@/components/LabeledIcon';
import { IconKey } from '@/types';

export default function mapLinks(
  skills: { title: string; icon: string; href?: string }[]
): LabeledIconProps[] {
  return skills?.map((icon) => ({
    name: icon.title,
    icon: icon.icon as IconKey,
    href: icon.href,
  }));
}
