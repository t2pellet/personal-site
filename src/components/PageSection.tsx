import React, { PropsWithChildren } from 'react';
import { Language, SectionEnum } from '@/types';
import classNames from 'classnames';
import { useLocale } from 'next-intl';
import getData from '@/util/fetch';
import KeepReading from '@/components/KeepReading';

export type SectionProps = PropsWithChildren<{
  section: SectionEnum;
  hideTitle?: boolean;
  className?: string;
}>;

type SectionData = {
  title: string;
  nextLink?: {
    text: string;
    section: SectionEnum;
  };
};

async function getSectionData(
  section: SectionEnum,
  lang: Language
): Promise<SectionData> {
  const result = await getData(
    `sections`,
    lang,
    'deep',
    `[slug][$eq]=${section}`
  );
  const { title } = result.data[0].attributes;
  const nextLink = result.data[0].attributes.continue;
  return {
    title,
    nextLink: nextLink && {
      text: nextLink.continueText,
      section: nextLink.section.data.attributes.slug,
    },
  };
}

export default async function PageSection({
  section,
  children,
  hideTitle = false,
  className,
}: SectionProps) {
  const lang = useLocale();
  const { title, nextLink } = await getSectionData(section, lang);
  return (
    <div id={section} className={classNames('flex w-full flex-col', className)}>
      {!hideTitle && (
        <h1 className='mb-12 text-center text-5xl font-extrabold'>{title}</h1>
      )}
      <div>{children}</div>
      {nextLink && <KeepReading {...nextLink} />}
    </div>
  );
}
