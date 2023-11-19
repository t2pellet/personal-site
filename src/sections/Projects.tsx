import React from 'react';
import PageSection from '@/components/PageSection';
import { Language, SectionEnum } from '@/types';
import ProjectCard, { ProjectCardProps } from '@/components/card/ProjectCard';
import KeepReading from '@/components/KeepReading';
import { useLocale } from 'next-intl';
import getData from '@/util/fetch';

export type ProjectsData = {
  projects: ProjectCardProps[];
};

async function getProjectData(lang: Language): Promise<ProjectsData> {
  const result = await getData('projects');
  const projects: ProjectCardProps[] = result.data.map((entry: any) => {
    const { title, description, url, repo, slug, picture } = entry.attributes;
    const { url: image } =
      picture.data.attributes.formats.small || picture.data.attributes;
    return {
      id: slug,
      name: title,
      description,
      image,
      link: url,
      repository: repo,
    };
  });
  return { projects };
}

export default async function Projects() {
  const lang = useLocale();
  const { projects } = await getProjectData(lang);
  return (
    <PageSection section={SectionEnum.PROJECTS}>
      <div className='mx-auto w-fit'>
        <div className='carousel carousel-center rounded-box -mx-2 max-w-[100vw] space-x-4 p-6 sm:-mx-4 md:mx-0 md:max-w-full'>
          {projects.map((props, idx) => (
            <div key={`project-${idx}`} className='carousel-item relative'>
              <ProjectCard {...props} className='carousel-item' />
            </div>
          ))}
        </div>
      </div>
      <KeepReading className='mt-4' section={SectionEnum.WORK} />
    </PageSection>
  );
}
