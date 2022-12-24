import { ProjectItem } from '../styles';

interface ProjectType{
    src: string;
    title: string
    alt?: string;
    link: string;
    languages?: string;
}
export default function Project({title,src, alt, link, languages}: ProjectType) {
    return (
        <div>
        <ProjectItem target="_blank" href={link}>
            <img
                loading="lazy"
                src={src}
                alt={alt? alt: 'img'}
            />
            <h2>{title}</h2>

        </ProjectItem>
        <span className='sub'>{languages?.toLocaleUpperCase()}</span>
        </div>

    );
}