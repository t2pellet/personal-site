import React from 'react';
import { IconBrandGithub } from '@tabler/icons-react';
import Image from 'next/image';
import classNames from 'classnames';
import './card.css';

export type ProjectCardProps = {
  name: string;
  image: string;
  description: string;
  repository?: string;
  link?: string;
  className?: string;
};

export default function ProjectCard({
  name,
  description,
  repository,
  image,
  link,
  className,
}: ProjectCardProps) {
  return (
    <div
      className={classNames(
        'whitespace-pre-wrap leading-tight tracking-tight text-secondary xl:text-lg',
        'rounded-box flex h-fit w-80 shrink-0 flex-col overflow-hidden',
        'cursor-pointer bg-secondary-content',
        'transition-transform duration-300 ease-in-out hover:scale-105',
        'project-card',
        className
      )}
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
              'mb-3 flex h-20 place-content-center items-center text-center transition-all delay-100 duration-100 ease-in-out',
              'project-card-description'
            )}
          >
            <p>{description}</p>
          </div>
          <div
            className={classNames(
              'absolute flex h-12 w-full place-content-center gap-2 transition-all delay-100 duration-200 ease-in-out',
              'project-card-links'
            )}
          >
            {repository && (
              <a className='btn btn-outline' href={repository}>
                <IconBrandGithub /> Code
              </a>
            )}
            {link && (
              <a className='btn btn-primary' href={link}>
                Check It Out
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
