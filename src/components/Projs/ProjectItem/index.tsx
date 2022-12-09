import { ProjectItem } from '../styles';

interface ProjectType{
    src: string;
    title: string
    alt?: string;
    link: string;
}
export default function Project({title,src, alt, link}: ProjectType) {
    return (
        <ProjectItem target="_blank" href={link}>
            <img
                loading="lazy"
                src={src}
                alt={alt? alt: 'img'}
            />
            <h2>{title}</h2>
        </ProjectItem>
    );
}