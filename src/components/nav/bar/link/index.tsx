import { useTranslations } from 'next-intl';
import ClientNavBarLink from './NavBarLink';
import { NavLinkProps } from '@/components/nav/NavLink';

export type NavbarLinkProps = Omit<NavLinkProps, 'children'>;

export default function NavBarLink({ className, section }: NavbarLinkProps) {
  const dict = useTranslations('titles');
  return (
    <ClientNavBarLink
      section={section}
      className={className}
      title={dict(section)}
    />
  );
}
