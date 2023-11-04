import React, { HTMLProps } from 'react';
import { TbBrandGithub as IconBrandGithub } from 'react-icons/tb';
import Image from 'next/image';
import classNames from 'classnames';
import { useTranslations } from 'next-intl';

export type ProjectCardProps = {
  id: string;
  name: string;
  image: string;
  link?: string;
  repository?: string;
};

export default function ProjectCard({
  name,
  id,
  image,
  link,
  repository,
  className,
  ...props
}: HTMLProps<HTMLDivElement> & ProjectCardProps) {
  const dict = useTranslations('sections.projects');
  return (
    <div
      className={classNames(
        'whitespace-pre-wrap leading-tight tracking-tight',
        'rounded-box flex h-fit w-80 shrink-0 flex-col overflow-hidden',
        'cursor-pointer bg-base-200 dark:bg-opacity-40',
        'transition-transform duration-300 ease-in-out hover:scale-105 focus:scale-105 active:scale-105',
        'project-card',
        className
      )}
      id={id}
      {...props}
    >
      <div className='overflow-hidden'>
        <Image
          className='project-card-image object-cover transition-transform duration-300 ease-in-out'
          src={image}
          alt={name}
          height={384}
          width={320}
        />
      </div>
      <div className='p-8 pt-4'>
        <div className='relative h-36'>
          <h1 className='h-9 text-center text-3xl font-extrabold text-primary'>
            {name}
          </h1>
          <div
            className={classNames(
              'neutral-content mb-3 flex h-20 place-content-center items-center text-center text-base transition-all delay-100 duration-100 ease-in-out dark:text-neutral-content',
              'project-card-description'
            )}
          >
            <p>{dict(id)}</p>
          </div>
          <div
            className={classNames(
              'absolute flex h-12 w-full place-content-center gap-2 transition-all delay-100 duration-200 ease-in-out',
              'project-card-links'
            )}
          >
            {repository && (
              <a className='btn btn-outline' href={repository} target='_blank'>
                <IconBrandGithub size={24} /> Code
              </a>
            )}
            {link && (
              <a className='btn btn-primary' href={link} target='_blank'>
                Check It Out
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
